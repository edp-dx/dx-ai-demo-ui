```
# Changelog

## [Unreleased]
- Added new entity `Badge` with relevant fields, annotations, getters, and setters.
- Updated `pom.xml` with dependencies for Spring Boot Web, JPA, H2 database, jaxb-api, and org.javassist.
- Configured H2 database in `application.properties`.
- Created `data.sql` in the resources directory with hardcoded badges data.
- Created `BadgeRepository` interface extending JpaRepository.
- Created `BadgeService` class to fetch all badges.
- Created `BadgeController` class with a GET endpoint to retrieve all badges.
```
