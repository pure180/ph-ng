# PaperHive frontend

This is the frontend code of [PaperHive](https://paperhive.org). It is free and open source software licensed under the GPL 3.0.

## Development

### Requirements

* git
* Node.js: the easiest way to install Node is via
  [nvm](https://github.com/creationix/nvm)
* [Angular CLI](https://github.com/angular/angular-cli/): `npm install -g @angular/cli`

### Get started
```
git clone git@github.com:paperhive/paperhive-frontend.git --recursive
cd paperhive-frontend
npm install
cp config.json.default config.json
```

### Development server

Run `ng serve` for a dev server and navigate to `http://localhost:4200/`. The page will automatically reload if you change any of the source files.

### Create new code

We use the [Angular CLI](https://github.com/angular/angular-cli/) for scaffolding new code. Example for generating a new component:
```
ng generate component component-name`
```
You can also use `ng generate directive/pipe/service/class/module`.

### Run unit tests

Run `npm test` to execute the unit tests.

### Run end-to-end tests

Run `npm run e2e` to execute the end-to-end tests.

### Production build

Run `ng build -prod` for a production build. The build artifacts will be stored in the `dist/` directory.
bla

### Common problems

 * Outdated dependencies: fix by running `rm -rf node_modules && npm install`
 * Wrong API configured in `config.json`: make sure the `apiUrl` in `config.json` is the one you want. Default is `http://dev.paperhive.org/backend/master`.
