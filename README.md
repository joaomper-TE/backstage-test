# `backstage-software-templates`

The `backstage-software-templates` repo holds all of our internal service component software templates for use by our developer portal.


## Templates

### `spring-boot-microservice`

This Backstage software template creates a new Spring Boot based microservice complete with a gradle build configuration that has the spring-boot convention plugin applied. a `Jenkinsfile` / `build-pod.yaml` defined, and a basic tech-docs structure established for the project documentation.

### `rest-api-spring-boot-microservice`

This Backstage template, owned by the API Team, creates a new REST API Spring Boot based microservice with some of the [API Design Guidelines](https://docs.google.com/document/d/1bxjXnIPVUMZz19LVbpfIB_PgN_a17lkCu204yGfH-5M/edit#heading=h.p7ned7wtkbum) already taken into account.
Its configuration has already:
- Gradle configured
- the spring-boot convention plugin applied
- a `Jenkinsfile` / `build-pod.yaml` defined
- a basic tech-docs structure established for the project documentation.
- TODO: Complete with REST API things

