# Required metadata
sonar.projectKey=react-helloworld
sonar.projectName=React Hello World
sonar.projectVersion=1.0

# Comma-separated paths to directories with sources (required)
sonar.exclusions=**/node_modules/**
sonar.inclusions=**/*.ts, **/*.tsx, **/*.js, **/*.jsx
sonar.test.inclusions=**/*.spec.ts, **/*.spec.tsx, **/*.spec.js, **/*.spec.jsx
sonar.ts.tslintconfigpath=tslint.json
sonar.ts.lcov.reportpath=coverage/lcov.info
sonar.javascript.lcov.reportpath=coverage/lcov.info

# Encoding of the source files
sonar.sourceEncoding=UTF-8
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": "./index.html",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
{
  "name": "hello-world",
  "version": "0.1.0",
  "dependencies": {
    "flow-bin": "^0.188.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "y18n": "^5.0.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build:clean": "react-scripts build",
    "build:prod": "react-scripts build",
    "test:coverage": "echo Mock stage test:coverage",
    "eject": "react-scripts eject",
    "install-types": "echo Mock stage install-types",
    "flow:check": "node node_modules/flow-bin/cli.js check"
  }
}
node_modules/
1. Application ai-demo-ui has been successfully deployed!!
