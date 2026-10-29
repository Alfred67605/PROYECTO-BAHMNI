---
id: "2432401410"
title: "Show provider from OpenMRS to OpenELIS as a requester"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2432401410/show-provider-from-openmrs-to-openelis-as-a-requester"
version: 2
updated: "2024-07-24T11:50:57.190Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:57.865Z"
---

# Show provider from OpenMRS to OpenELIS as a requester

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2432401410)  
> **Versión del documento:** v2 (2024-07-24T11:50:57.190Z) | **Autor/Editor:** Angshuman Sarkar

---

When you place an test/panel order from EMR, the order would appear in the lab dashboard as “Samples to collect”. The next step is to add the sample and generate an accession, before results can be entered. 

During this process, if you want to see the “orderer” information in the accession, you are required to provide the following setup, which maps a provider in EMR to another provider in LIS. As of now, there is no UI to do some of the steps below, and best to do through database.  

#### **At OpenMRS**

- 
Create the user (must be checked as **provider**) in  OpenMRS.

Login into** openmrs**

- 
Go to **Administration **→ Users(**Manage Users**) → **Add user. **Ensure that you chose the option “Create a Provider account for this user”

- 
It is also advisable that you allocate an identifier for the provider you have created. You can do that once you have created a user, go to **Administration → Manage Providers → Find by name**, selecting the provider and updating the Identifier field.   

- 
Identify the unique id (UUID) of the the corresponding provider for the user in OpenMRS.

Go to **Manage Providers** and search by name.  From the listed results, browse to the provider details page and copy the UUID

- 
Alternatively, you may find the UUID from the database as well

login to **mysql **: **openmrs **database (you need to have the login credentials for the openmrs-user)

- 
Identify the provider’s UUID with the Identifier you assigned above

```
> mysql -u openmrs-user -p openmrs
> select uuid from provider where identifier = 'XYZ';
```

- 
Note the UUID of the provider you identified above, this will be used as “**external_id**” reference in OpenELIS **provider** table. 

#### **At OpenELIS**

- Create a user and corresponding provider in OpenELIS

Create a person and a corresponding provider

- 
Map the external_id identified above to the provider

```
# login to postgresql:clinlims database, schema clinlims
> psql -Uclinlims clinlims
# identify the latest person ID. In the below SQL, its the first entry
> select * from person order by id desc;

# Increment the ID (+1)and create a person. in the SQL below, last_id is the Id identified above
>  insert into person (id, last_name, first_name, middle_name) values (last_person_id+1, 'Nayar', 'Srijit', 'Kumar');
# Find the latest provider id created in the provider table of clinlims
> select * from provider order by id desc;
# With the person Id created above, and with the incremented the provider id identified above, create a new provider
> insert into provider(id, person_id, external_id) values (last_provider_id+1, , '');
```

- If you already identified or know the **provider** with **person_id** then you can just update the **external_id** reference

```
> update provider set external_id = '' where id = ;

```

With that, the provider name will be shown in the Requester name dropdown. You may restart the bahmni_lab service.

For Bahmni Native install

>** systemctl restart bahmni-lab**

For Bahmni Docker install, restart the bahmni_lab container
