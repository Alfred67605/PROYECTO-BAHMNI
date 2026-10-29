---
id: "3210477602"
title: "Micro-frontends (MFE) architecture for UI"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3210477602/micro-frontends-mfe-architecture-for-ui"
version: 5
updated: "2025-01-20T10:47:00.573Z"
author: "Rahul Ramesh"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:26.085Z"
---

# Micro-frontends (MFE) architecture for UI

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3210477602)  
> **Versión del documento:** v5 (2025-01-20T10:47:00.573Z) | **Autor/Editor:** Rahul Ramesh

---

# The problem

As Bahmni evolves, we have started building modules in React instead of AngularJS. Currently, these React components are built inside AngularJS applications using adapters. What this means is that every React-based module needs to be built with an AngularJS-based repository, adding to code duplication and maintenance overheads. 

Additionally, any React module which needs to install its components within existing AngularJS modules of bahmniapps (e.g. the form-controls) will need to be built along with `openmrs-module-bahmniapps` since AngularJS does not allow for dynamic dependencies. What this means is, that the bahmniapps project must be rebuilt for every deployment of such a react module.

# The solution

WebPack supports a technique called Module Federation, through which it allows the use of dynamic JavaScript modules which can be fetched at runtime. Coupled with React’s Suspense model, a React component can now use a component loaded from a remote javascript file at runtime. With this strategy, `openmrs-module-bahmniapps` can use react components served from a different web-server/container at runtime and these react components can reside in their own repositories with independent deployment strategies. The host UI of `openmrs-module-bahmniapps` does not need to be rebuilt to get the latest of these react components. 

This solution also involves separating out the AngularJS adapter code into the `openmrs-module-bahmniapps` repository so that these dynamic React modules do not need to be built with any sort of AngularJS dependencies and can be set up as pure React projects.

### Community call explaining this solution

    

# Architecture diagram
![](https://bahmni.atlassian.net/wiki/download/attachments/3210477602/mfe-architecture__annotated.png?version=1&modificationDate=1690268169026&cacheVersion=1&api=v2)
## Overall flow

- 
`openmrs-module-bahmniapps` now contains a separate folder for the react micro-frontend source called `/micro-frontends`. Built files from this folder are written to `ui/app/micro-frontends-dist/` folder so that the AngularJS applications can refer to them. These files are typically `*.min.js` and `*.min.css`. 

- 
Common code across all MFEs is handled as a unique entry point called `shared` which results in `shared.min.js` and `shared.min.css` files. This, along with react + react-dom files, needs to be loaded before loading any micro-frontend.

- 
A local MFE is available called `next-ui`. This is meant to house react components which don’t need to have their own repositories. angularJs adapters over the main entry components results in an angularJs module called `bahmni.mfe.nextUi` which can be added as dependency to your angularJs module when you include `next-ui.min.*` files in your AngularJS entry. Since these components don’t have remotes, they will need to be built and updated along side `openmrs-module-bahmniapps` repository.

- 
For remote MFEs, there is one repository each. These repositories will have exposed certain entry components through the ModuleFederationPlugin. Once these repositories are built and deployed, they will be serving a `remoteEntry.js` file which will be used for loading these remote components. Most likely, this web server would be proxied within the Bahmni proxy.

- 
At `bahmniapps/micro-frontends/` there will be one WebPack entry point for every remote micro-frontend.

This will house angular adapter code for react components resulting in an angular module called `bahmni.mfe.`. This needs to be injected into the Bahmni module requiring this micro-frontend.

- 
The adapted react components will each lazily load corresponding remote react components using `remotEntry.js` at run time.

- 
These will be built as `.min.js` and `.min.css` which can be loaded by the Bahmni module requiring this micro-frontend.

# Tools & Techniques used

- 
[ModuleFederationPlugin](https://webpack.js.org/concepts/module-federation/) which allows WebPack to reference remote modules

- 
Suspense techniques in React which allow lazy loading of remote React components

- 
react2angular which adapts react components into angularJs components

# Decisions & tradeoffs

- 
Node version v14.21.3 (LTS). This is the minimum required which worked with the WebPack features needed to get this running

- 
React version v16.14.0. Existing usage was found for this and did not want to break things. This version supports all the tools needed for Module federation so locked this in.

- 
React is a bit finicky with module federation, especially with hooks around, so the above versions of node and react are completely locked in and need to be in sync with the different repositories for this to work

- 
Carbon components v10.19 and carbon-components-react v7.25. These are basically held back because of our node version. The impact is that the carbon design system documentation would be a bit different since they have changed their sass structure a lot and devs might have trouble mapping the styles correctly. Functionally, not a lot has changed so they should be able to get the right changes from older documentation.

- 
No big changes to the styling solution. Since Carbon design system has Sass, we will continue to work with the same. The micro-frontends do support module sass for isolated styling, but that is about it.

- 
For translations, each remote MFE handles their own translations. We could potentially look at sharing core translations with MFEs later. The local MFE gets to use the core set of translations

- 
The MFEs as of now don’t have an innate concept of configuration. They are free to call the configuration APIs on their own and/or else be passed necessary configurations from the host application during runtime.

- 
The React codebase including the MFEs need to rely on a `window.React` and `window.ReactDOM` instead of bundling them. This was done so as to not break existing work around form components which rely on similar and the way that angular apps were loading the react bundles. The impact of this is that the WebPack configurations are a bit more involved, obfuscating this dependency and making sure that the actual source code sees no difference in terms of React usage. With this, later migration to a more traditional React bundling model will be painless.

# How to write and integrate your MFE

[Follow the documentation on the next page](/wiki/spaces/BAH/pages/3211755555/How+to+implement+micro-frontends+MFEs)
