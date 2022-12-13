# ${{ values.project_id }}

## Owners: ${{ values.owner }}

## Description

${{ values.project_description }}

### Standard Management Ports

This service imports the Spring Boot Actuator framework in order to expose metrics
and monitoring endpoints.

#### Monitoring

Kubernetes liveness and readiness probes are available out of the box:

- `/actuator/health/readiness`
- `/actuator/health/liveness`

#### Metrics

Standard JVM metrics are exported in a format digestible by Prometheus:

- `/actuator/prometheus`
