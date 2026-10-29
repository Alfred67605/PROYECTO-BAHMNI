---
id: "3211755555"
title: "How to implement micro-frontends (MFEs)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3211755555/how-to-implement-micro-frontends-mfes"
version: 12
updated: "2025-01-20T10:47:14.655Z"
author: "Rahul Ramesh"
category: "Arquitectura_Sub_Sub"
download_date: "2026-10-20T21:06:26.580Z"
---

# How to implement micro-frontends (MFEs)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3211755555)  
> **Versión del documento:** v12 (2025-01-20T10:47:14.655Z) | **Autor/Editor:** Rahul Ramesh

---

This guide will go step by step through implementing your own MFE with Bahmni. For example purposes, let&rsquo;s say you want to create a micro-frontend named `diagnostics` which will export a single component called `DiagnosticsDashboard`.

# Step 1: Create a MFE repository

You can clone [bahmni-microfrontend-reference](https://github.com/Bahmni/bahmni-microfrontend-reference) repository for a solid starting point. The [README.md](https://github.com/Bahmni/bahmni-microfrontend-reference/blob/main/README.md) will contain a checklist for you to go through and set-up the repository with essential information. 

Once you follow through the checklist, you should end up with a module name of `bahmni_diagnostics` in the ModuleFederation plugin and `DiagnosticsDashboard` should be part of the `exposes` property of the same.

# Step 2: Decide on a serving strategy for your MFE

On running `yarn build`, you should get built files in `dist/federation/` folder. Files within this need to be served from a web server. This would be our remote URL.

### 2.1: Docker container with proxy

The reference repository assumes that you want to serve your MFE from within the `bahmni-docker` setup as a single container based on a reverse proxy. If you go through this route, follow the steps below

**2.1.1: **Update the GitHub workflow and Dockerfile to build an image named `bahmni/microfrontend-diagnostics`.

**2.1.2: **Add appropriate entry into the docker-compose setup that you are using. This could be [bahmni-docker](https://github.com/Bahmni/bahmni-docker) or some fork of it as per your use case. You should end up with a container named (for example) `diagnostics`. An example entry with volume mount for local development is shown below.

```
diagnostics:
  image: bahmni/microfrontend-diagnostics:latest
  profiles: ["emr", "bahmni-lite", "bahmni-mart"]
  volumes:
  - "${DIAGNOSTICS_PATH:?}/dist/federation/:/usr/local/apache2/htdocs/diagnostics"
```

**2.1.3: **Add a proxy entry for the container in your proxy setup. Assuming you are using [bahmni-proxy](https://github.com/Bahmni/bahmni-proxy), add a reverse proxy rule to `resources/bahmni-proxy.conf`

```
# diagnostics
ProxyPass /diagnostics http://diagnostics/diagnostics
ProxyPassReverse /diagnostics http://diagnostics/diagnostics
```

This make the apache folder accessible at `/diagnostics` proxy. Confirm that `https:///diagnostics/remoteEntry.js` is accessible.

# Step 3: Create MFE module in `openmrs-module-bahmniapps`

### 3.1: Create source files to hold new angular module

```
mkdir micro-frontends/src/diagnostics
touch micro-frontends/src/diagnostics/index.js
```

```
/* micro-frontends/src/diagnostics/index.js */

// Follow the below module naming convention
angular.module('bahmni.mfe.diagnostics', [/* add any dependencies */]);
```

### 3.2: Add WebPack entry point for new module

```
/* micro-frontends/webpack.config.js */

module.exports = {
  // ... other stuff
  entry: {
    // ...
    diagnostics: "./src/diagnostics/index.js"
  }
}
```

Completing the above steps adds a new WebPack module which will be built into `ui/app/micro-frontends-dist/diagnostics.min.js` and ``ui/app/micro-frontends-dist/diagnostics.min.css`.

### 3.3: Mock out your module for tests

Assuming that your MFE will have full test coverage in your own repository, you should mock out this module for unit tests in Bahmni to make things easier. This needs to be done in `ui/test/__mocks__/micro-frontends.js`

```
/* ui/test/__mocks__/micro-frontends.js */

// add an empty module as a mock
angular.module('bahmni.mfe.diagnostics', []);
```

# Step 4: Create a hosting React component

### 4.1: Add ModuleFederation config for your MFE

This sets up the remote URL accessible for dynamic imports

```
/* micro-frontends/webpack.config.js */

module.exports = {
  // ... other stuff
  plugins: [
    // ...
    new ModuleFederationPlugin({
      // ...
      remotes: {
        // ...
        
        // IF using proxy, do this
        // Add your MFE with the federated module name and proxy path
        "@openmrs-mf/diagnostics": remoteProxiedAtHostDomain({ name: "bahmni_diagnostics", path: "diagnostics"})
        
        // if not using proxy, add the static URL instead of using remoteProxiedAtHostDomain
      }
    })
  ]
}
```

### 4.2: Create a hosting React component loading the remote component

```
/* micro-frontends/src/diagnostics/Dashboard.jsx */

import PropTypes from "prop-types";
import React, { Suspense, lazy } from "react";

export function Dashboard(props) {
  // on run, this will fetch remoteEntry.js and load the DiagnosticsDashboard component from there
  const LazyComp = lazy(() => import("@openmrs-mf/diagnostics/DiagnosticsDashboard"));

  return (
    <>
      
        
      
    
  );
}

// Without propTypes, react2angular won't render the component
Dashboard.propTypes = {
  hostData: PropTypes.shape({
    // Set up your input data shape as needed here, below is an example
    patient: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
    }).isRequired,
  }),
  hostApi: PropTypes.shape({
    // Set up your output (callbacks) shape as needed. below is an example
    onConfirm: PropTypes.func,
  }),
};
```

# Step 5: Register angular component

The angular module created in Step 3 would need a wrapper angular component added to, which will interface with the hosting component created in Step 4. There are two ways to achieve this

### option A (recommended): Use React2AngularBridgeBuilder abstraction

We have created a good abstraction which simplifies the wrapper build process using conventions. Check it out at `micro-frontends/src/utils/bridge-builder.js`

```
/* micro-frontends/src/diagnostics/index.js */
import { React2AngularBridgeBuilder } from "../utils/bridge-builder";
import { Dashboard } from 'Dashboard.jsx';

// Extract module name to make it easier
const MODULE_NAME = "bahmni.mfe.diagnostics"
angular.module(MODULE_NAME, []);

const builder = new React2AngularBridgeBuilder({
  moduleName: MODULE_NAME,
  // use the following convention mfe
  componentPrefix: "mfeDiagnostics",
});

builder.createComponent("Dashboard", Dashboard);
// The above registers an angular component named 'mfeDiagnosticsDashboard'
```

### option B: Manual

If you need more control over the wrapper build process, you can do it manually, following what the abstraction in `micro-frontends/src/utils/bridge-builder.js` does internally.

```
/* micro-frontends/src/diagnostics/index.js */
import { Dashboard } from 'Dashboard.jsx';
import { react2angular } from "react2angular";

// Extract module name to make it easier
const MODULE_NAME = "bahmni.mfe.diagnostics"

angular.module(MODULE_NAME, []);

angular.module(MODULE_NAME)
  .component('mfeDiagnosticsDashboard', react2angular(Dashboard));
  
// The above registers an angular component named 'mfeDiagnosticsDashboard'
```

# Step 6: Use your MFE in an angular module

To use your MFE in a given angular module, you just need to include the the module as a dependency and add the required built files along with react to the html entry point. Let&rsquo;s take the example of the `clinical` module.

```

  
  
  
  
  
  
  
  
  

  
  
  

  
  
  

  
  

  
  
  
  
  
  

```

```

---------- Add shared css first

---------- Then add mfe css

---------- IMPORTANT: Make sure no mfe css is inside a build block like this

---------- Include the react packages if not already present

---------- Add the shared JS for mfes

---------- Add the JS of the mfe

---------- IMPORTANT: Make sure no mfe js is inside a build block like this. All MFE code needs
           to be ABOVE this block
           
           
```

 It is very important to correctly order and place the javascript and css files within the index.html. There are build marker positions in here which will make Grunt pick up minified files within and try to minify again. This will fail with the mfe build. Follow the instructions in the comments given 

The last step after this is to include the module as a dependency in your init.js file. 

```
/* ui/app/clinical/init.js */

// ...
angular.module('bahmni.clinical', [
  // other dependencies
  'bahmni.mfe.diagnostics'
])
```

Which then allows you to render your component in a template like this

```

```

# Managing information flow

Currently, we have not set up any kind of event bus architecture for communication between host and MFE components. As a convention, we will use `hostData` and `hostApi` keys to do this communication.

## Passing data from Host to MFE

The remote MFE can receive data from the host angular application though standard React props. As a matter of convention, it has been decided to wrap these inputs in a single prop object called `hostData`. An example usage would look like

```
// in the controller
$scope.hostData = {
  patient: {
    // patient info
  },
  otherData: "// other data"
}
```

```

```

```
// in the React entry component
export function Component1(props) {
  return {props.hostData.patient.name}
}
```

**Note:** Remember, angularJs maps camelCase bindings to kebab-case so the `hostData` prop will be bound to `host-data` binding in the html.

## Host reacting to events from MFE

For now, we have decided to rely on the host app passing callbacks to the MFE through a conventional prop named `hostApi` which needs to be an object. An example usage would look like

```
// in the controller
$scope.hostApi = {
  onClose: function() {
    closeModal();
  },
  onConfirm: function(id) {
    service.confirmValues(id);
  }
}
```

```

```

```
// in the React entry component
export function Component1(props) {
  // *See notes
  return Close
}
```

#### Important note regarding hostApi

For some reason, the `react2angular` adapter take an extra tick to resolve the functions within `hostApi` binding. Due to this, even if your propTypes mark the hostApi functions as required, React will throw reference errors for accessing functions in undefined and similar. I recommend using the optional chaining operator (`?.`) to get around this
