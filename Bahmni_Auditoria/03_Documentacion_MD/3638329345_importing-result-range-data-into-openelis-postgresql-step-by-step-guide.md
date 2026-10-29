---
id: "3638329345"
title: "Importing Result Range Data into OpenELIS PostgreSQL: Step-by-Step Guide"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3638329345/importing-result-range-data-into-openelis-postgresql-step-by-step-guide"
version: 3
updated: "2024-07-18T14:49:10.283Z"
author: "Rahul Ramesh"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:58.356Z"
---

# Importing Result Range Data into OpenELIS PostgreSQL: Step-by-Step Guide

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3638329345)  
> **Versión del documento:** v3 (2024-07-18T14:49:10.283Z) | **Autor/Editor:** Rahul Ramesh

---

This guide offers comprehensive instructions on importing result range data into the OpenELIS PostgreSQL database using a shell script and a CSV file.

## Prerequisites

- 
**Environment Setup:**

Ensure that you are operating within the `openelisdb-1` container where the OpenELIS PostgreSQL database is accessible.

- 
**Required Files:**

Shell script: `copy-result-range.sh`

- 
CSV file: `result-ranges.csv`

## Step-by-Step Instructions

### Download and Copy Required Files

Download the shell script (from [Bahmni/bahmni-scripts](https://github.com/Bahmni/bahmni-scripts/blob/master/metadataScripts/openelis/copy-result-range.sh) repository), define result ranges in CSV format, and then copy them to the appropriate directories within your `bahmni-docker` folder.

- 
**Shell script:** `/bahmni-docker/bahmni-standard/scripts/copy-result-range.sh`

- 
**CSV file:** `/bahmni-docker/bahmni-standard/openelis-db-dump/data/result-ranges.csv`

**CSV Structure**
Ensure that the CSV file (`result-ranges.csv`) is correctly formatted as shown below:

```
Concept UUID,Gender,Min Age,Max Age,Normal Low,Normal High,Valid Low,Valid High
```

### Volume Mount Configuration

Update the `openelisdb` service configuration in your Docker Compose file to mount the script and CSV file into the container.

#### Docker Compose Configuration:

```
openelisdb:
    profiles: ["openelis","bahmni-standard"]
    image: '${OPENELIS_DB_IMAGE_NAME:?[ERROR]}'
    volumes:
      - '${OPENELIS_DB_DUMP_PATH}:/resources/db-dump'
      - 'openelisdbdata:/var/lib/postgresql/data'
      # Volume mount both the files into the resources subfolder
      - './scripts/copy-result-range.sh:/resources/copy-result-range.sh' 
      - './openelis-db-dump/data/result-ranges.csv:/resources/result-ranges.csv'
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -h localhost -U postgres']
      interval: 10s
      timeout: 5s
      retries: 5
    environment:
      POSTGRES_USER: ${OPENELIS_DB_USER:?}
      POSTGRES_PASSWORD: ${OPENELIS_DB_PASSWORD:?}
      POSTGRES_DB: ${OPENELIS_DB_NAME:?}
    logging: *log-config
    restart: ${RESTART_POLICY}
```

### Set Script Permissions

Access the `openelisdb-1` container and ensure that the script has executable permissions.

```
cd resources && chmod +x copy-result-range.sh
```

### Execute the Script

Run the script with the appropriate environment variables.

```
CSV_FILE_PATH="result-ranges.csv" \
POSTGRES_DB="clinlims" \
POSTGRES_USER="clinlims" \
./copy-result-range.sh
```

## Notes

- 
**CSV File Accessibility:**  
Verify that the `result-ranges.csv` file is correctly formatted and accessible from the script's execution context.

- 
**Test Result Ranges:**  
Confirm that the test result ranges added to the `result-ranges.csv` do not include the unit in which the results are to be captured. The field expects a numeric value, and any non-numeric character will result in an error.

- 
**Test Unit:**  
Ensure that the test result ranges are defined in the unit in which the test has been defined.

- 
**Concept UUID Matching:**  
Validate that the Concept UUID in the CSV matches the test UUID in the OpenMRS dictionary.

- 
**Environment Variables:**  
Review and configure the following environment variables to align with your specific OpenELIS PostgreSQL database setup:

`POSTGRES_DB`: The database name (e.g., `clinlims`).

- 
`POSTGRES_USER`: The database user (e.g., `clinlims`).

- 
`POSTGRES_HOST`: The database host (default: `localhost`).

- 
`POSTGRES_PORT`: The database port (default: `5432`).

## Troubleshooting

If you encounter any issues, ensure that:

- 
The Docker Compose file is correctly configured, and the volumes are appropriately mounted.

- 
The shell script has the correct permissions and is executable.

- 
The CSV file path is accurately specified in the environment variables.

- 
The environment variables match the OpenELIS PostgreSQL database configuration.

### Conclusion

By adhering to these steps, you can effectively import result range data into the OpenELIS PostgreSQL database using the provided shell script and CSV file.
