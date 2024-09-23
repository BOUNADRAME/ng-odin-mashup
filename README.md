# NgOdinMashup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## setup

# Basic Odin project

This project was generated with Odin CLI, a command line interface for developing M3 web applications.

```
npm install @infor-up/m3-odin --save
npm install @infor-up/m3-odin-angular --save
npm install @infor-up/m3-odin-cli --save
```

```
# start with proxy
ng serve --proxy-config proxy.conf.json

# setup m3 url
odin set m3-proxy https://be-dev.escal.local:32008

# setup tenant
odin set ion-proxy https://ionserver/ODIN_ION_PROXY_TARGET

# start ng odin project
odin serve

```

## zustant with ng18

```
# important link
https://github.com/JoaoPauloLousada/ngx-zustand

# install zustant
npm install ngx-zustand zustand
or force
npm install ngx-zustand zustand --legacy-peer-deps
```

## UI

```
https://github.com/infor-cloud/m3-h5-sdk/blob/master/README.md
https://github.com/infor-cloud/m3-h5-sdk/blob/master/cli/README-CLI.md
```
