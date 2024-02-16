# Changelog

## [Unreleased]
- Added new entity class `Badge`.
- Added dependencies in `pom.xml` for Spring Boot Web, JPA, H2, jaxb-api, and org.javassist.
- Configured H2 database in `application.properties`.
- Created `data.sql` with predefined badge data.
- Created `BadgeRepository` interface.
- Created `BadgeService` class.
- Created `BadgeController` with a GET endpoint to fetch all badges.
