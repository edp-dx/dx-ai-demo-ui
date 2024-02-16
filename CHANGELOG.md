```
# Changelog

## [Unreleased]

### Added
- Badge entity class with attributes `badgeId`, `badgeName`, `description`, `pointsRequired`, `badgeImage`, `createDate`, and `updateDate`.
- Dependencies for Spring Boot Web, JPA, H2 database, JAXB API, and Javassist in `pom.xml`.
- H2 database configuration in `application.properties`.
- `data.sql` file with hardcoded data for 5 badges.
- BadgeRepository interface extending JpaRepository.
- BadgeService class to fetch all badges from the database.
- BadgeController REST controller with GET endpoint `/badges`.
```
