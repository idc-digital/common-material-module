# common-material-module

This library builds to provide all Angular Material module under single module to make simple the utilization of Angular Material in project.

[![npm version](https://badge.fury.io/js/%40angular%2Fcdk.svg)](https://www.npmjs.com/package/common-material) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/olavoparno/jest-badges-readme/blob/master/LICENSE) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=BakhtMunirUet_common-material-module&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=BakhtMunirUet_common-material-module) ![BuiltBy](https://img.shields.io/badge/TypeScript-Lovers-black.svg "img.shields.io") ![Synk](https://snyk.io/test/github/expressjs/express/4.x/badge.svg) [![CI/CD Docker](https://github.com/wnqueiroz/sonatype-nexus-repository-badge-generator/actions/workflows/ci-cd.yml/badge.svg?branch=main)](https://github.com/BakhtMunirUet/common-material-module/actions) [![Lerna](https://repology.org/badge/latest-versions/lerna.svg)](https://repology.org/project/lerna/versions) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Getting started

### Prerequisites

Before you start, you need to install Angular Material

```bash
ng add @angular/material
```

### Download and Installation

##### Installing via npm

```bash
npm install common-material  --save
```

### Usage

After installation of the package you need to add `CommonMaterialModule` where ever module you wants to utilize. Please find the below example:

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonMaterialModule } from "common-material";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CommonMaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Release Process

The release process has been manage from `pacakge.json` as well as from lerna, when ever code push using lerna it will ask for the version the same version added again.

## License

This project is licensed under the MIT license. See the <a href="./LICENSE"> LICENSE</a> file for more info.</p>

## Authors

- [Bakht Munir](https://github.com/BakhtMunirUet?tab=repositories)

- [Vishal](https://github.com/vishalm?tab=repositories) -- **-Mentor-**
