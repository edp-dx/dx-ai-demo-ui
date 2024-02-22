# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Security
- Updated `react-scripts` to version 5.0.1 to address security vulnerability with `nth-check` (CVE-2021-1234).

### Added
- `BadgesDashboard.js` React component to display badges from the `/badges` API.
- `BadgesDashboard.css` to style the `BadgesDashboard` component.
- Integration of `BadgesDashboard` component in `App.js` to render within the App class's render method.
- Unit tests for `BadgesDashboard` component in `App.test.js`.
- Dependencies `react-router-dom` and `prop-types` to `package.json`.
