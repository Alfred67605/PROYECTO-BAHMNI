---
id: "6094854"
title: "Generating database diagrams for schema analysis"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/6094854/generating-database-diagrams-for-schema-analysis"
version: 1
updated: "2014-06-24T09:00:39.955Z"
author: "i"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:28.359Z"
---

# Generating database diagrams for schema analysis

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/6094854)  
> **Versión del documento:** v1 (2014-06-24T09:00:39.955Z) | **Autor/Editor:** i

---

If you want to analyse a database, understand relations between its tables etc., you can use this tool : [schemaspy](http://schemaspy.sourceforge.net/)

Example usage:

## Creating openerp database diagrams

- Download schemaspy from : [http://sourceforge.net/projects/schemaspy/files/](http://sourceforge.net/projects/schemaspy/files/)
- It used to have dependency on Graphviz, so you may also have to install graphviz : [http://www.graphviz.org/Download..php](http://www.graphviz.org/Download..php)
- command to execute the jar :

java -jar schemaSpy_5.0.0.jar -t pgsql  -db openerp -s public -u openerp -p <password> -host <host> -o <output dir> -dp <path-to-the-db-driver>

More info on the parameters can be found at [http://schemaspy.sourceforge.net/](http://schemaspy.sourceforge.net/)

 

 

 
  
## Related articles

    
    

        - 
        
                Page:        

        
                                [Modeling Patient & Clinical Data in Bahmni (Training)](/wiki/spaces/BAH/pages/2940862465/Modeling+Patient+Clinical+Data+in+Bahmni+Training)
                        
                        
                    
    

        - 
        
                Page:        

        
                                [Generating database diagrams for schema analysis](/wiki/spaces/BAH/pages/6094854/Generating+database+diagrams+for+schema+analysis)
