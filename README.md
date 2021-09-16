# TechnologyShields
 
[![npm](https://img.shields.io/npm/v/technology-shields)](https://www.npmjs.com/package/technology-shields) [![build status](https://img.shields.io/github/workflow/status/MrBartusek/TechnologyShields/build)](https://github.com/MrBartusek/TechnologyShields/actions) [![codecov](https://codecov.io/gh/MrBartusek/TechnologyShields/branch/main/graph/badge.svg?token=7QK6LoXvv7)](https://codecov.io/gh/MrBartusek/TechnologyShields)

TechnologyShields is a simple NPM package for generating [shields.io](https://shields.io) URLs from [Simple Icons](https://simpleicons.org) slugs.

## Installation

```bash
npm install technology-shields
```

## Usage

> ℹ️ Because this package uses [simple-icons](https://github.com/simple-icons/simple-icons), we ask that all users read their [legal disclaimer](https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md) before using icons from Simple Icons.

TechnologyShields exports `get` function with alias `Get`. It takes 3 arguments:

| Parameter  | Type                   | Required | Default          | Description |
| ---------- | ---------------------- | -------- | ---------------- | ----------- |
| name       | `string`               | Yes      |                  | Simple icons slug. [See all slugs](./slugs.md). |
| type       | ExportType or `string` | No       | `ExportType.URL` | Type of the exported shield, see below |
| includeURL | `boolean`              | No       | `true`           | Should image be wrapped in URL to the service. No effect if `URL` export type is selected |

### Export Type

If you are using Typescript, you can specify the export type using exported `ExportType` enum. If you don't
want to or you are using Javascript, you can just provide a string. Available export options are:

- `URL` - Export raw shield URL.
- `MARKDOWN` - Export shield as markdown code.
- `HTML` - Export shield as html code.

### Simple usage

```js
const technologyShields = require("technology-shields")

console.log(technologyShields.get("typescript", "MARKDOWN"))
```

Output:

[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org/)

### Multiple shields

```js
const technologyShields = require("technology-shields")

console.log(technologyShields.get(["github", "typescript", "codecov", "git", "visualstudiocode", "eslint"], "MARKDOWN"))
```

Output:

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/) [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Codecov](https://img.shields.io/badge/-Codecov-F01F7A?style=flat-square&logo=codecov&logoColor=white)](https://codecov.io/) [![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)](http://git-scm.com/) [![Visual Studio Code](https://img.shields.io/badge/-Visual_Studio_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com) [![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)