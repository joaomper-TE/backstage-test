
# ${{ values.project_id }}

## Owners: ${{ values.owner }}

## Description

${{ values.project_description }}

```
├── bases                   - common configurations across all env/region/clusters
├── docs                    - documentation for this deployment repository
└── environments
    ├── prod
    │   ├── bases           - common configurations across all PROD region/clusters
    │   ├── eu-central-1    - explicit configuration for PROD eu-central-1 region
    │   ├── us-east-1       - explicit configuration for PROD us-east-1 (DR) region
    │   └── us-west-1       - explicit configuration for PROD us-west-1 region
    └── staging
        ├── bases           - common configurations across all STG region/clusters
        ├── eu-central-1    - explicit configuration for STG eu-central-1 region
        ├── us-east-1       - explicit configuration for STG us-east-1 (DR) region
        └── us-west-1       - explicit configuration for STG us-west-1 region
```