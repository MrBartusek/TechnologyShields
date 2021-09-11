# TechnologyShields
 
[![npm](https://img.shields.io/npm/v/technology-shields)](https://www.npmjs.com/package/technology-shields) [![build status](https://img.shields.io/github/workflow/status/MrBartusek/TechnologyShields/build)](https://github.com/MrBartusek/TechnologyShields/actions) [![codecov](https://codecov.io/gh/MrBartusek/TechnologyShields/branch/main/graph/badge.svg?token=7QK6LoXvv7)](https://codecov.io/gh/MrBartusek/TechnologyShields)

TechnologyShields is a simple NPM package generating for [shields.io](https://shields.io) urls from [Simple Icons](https://simpleicons.org)

## Installation

```bash
npm install technology-shields
```

## Usage

> ℹ️ Because this package uses [simple-icons](https://github.com/simple-icons/simple-icons), we ask that all users read their [legal disclaimer](https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md) before using icons from Simple Icons.

### Simple usage

```js
const technologyShields = require("technology-shields")

console.log(technologyShields.get("typescript", "MARKDOWN"))
```

Output:

[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### Multiple shields

```js
const technologyShields = require("technology-shields")

console.log(technologyShields.get(["github", "typescript", "codecov", "git", "visualstudiocode", "eslint"], "MARKDOWN"))
```

Output:

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/) [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Codecov](https://img.shields.io/badge/-Codecov-F01F7A?style=flat-square&logo=codecov&logoColor=white)](https://codecov.io/) [![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)](http://git-scm.com/) [![Visual Studio Code](https://img.shields.io/badge/-Visual_Studio_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://commons.wikimedia.org/) [![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)