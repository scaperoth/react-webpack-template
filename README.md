# react webpack template

simple application that has all the things out of the box that I like to get started making a front-end prototype application

## Install

installs node modules

```
yarn
```

## Run

serves development application at port 3000 or \$PORT environment variable

```
yarn serve
```

## Build

creates optimized build and bundles files into `dist` folder

```
$ yarn build
```

## Linting and Prettier

run eslint

```
$ yarn lint
```

fix problems found in eslint

```
$ yarn lint:fix
```

format files using prettier

```
$ yarn format
```

> Pre-commit hook will run before pushing repo using husky, linter, and prettier
