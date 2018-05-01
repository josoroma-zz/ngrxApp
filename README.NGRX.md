# Angular CLI + NGRX

- https://github.com/angular/angular-cli

- https://github.com/ngrx/platform/tree/master/example-app/app

- https://yarnpkg.com/en/docs/managing-dependencies

```
mkdir -p ~/Sites/angular/ngrx && cd ~/Sites/angular/ngrx
```

```
npm install -g @angular/cli
```

## Let's create a new App

```
ng new ngrxApp --routing --style scss

cd ngrxApp
```

### Optionally use Yarn for Angular CLI

```
ng set --global packageManager=yarn
```

## Auth module

- https://github.com/angular/angular-cli/wiki/generate-module

```
ng g module components/Auth --routing --flat false

# then you will see:

create src/app/components/auth/auth-routing.module.ts
create src/app/components/auth/auth.module.ts
```

### Auth module - Landing component

- https://github.com/angular/angular-cli/wiki/generate-component

```
ng g component components/auth/components/Landing -m components/auth/auth.module.ts --spec

# then you will see:

create src/app/components/auth/components/landing/landing.component.scss
create src/app/components/auth/components/landing/landing.component.html
create src/app/components/auth/components/landing/landing.component.spec.ts
create src/app/components/auth/components/landing/landing.component.ts
update src/app/components/auth/auth.module.ts
```

### Auth module - Signup component

```
ng g component components/auth/components/Signup -m components/auth/auth.module.ts --spec

# then you will see:

create src/app/components/auth/components/signup/signup.component.scss
create src/app/components/auth/components/signup/signup.component.html
create src/app/components/auth/components/signup/signup.component.spec.ts
create src/app/components/auth/components/signup/signup.component.ts
update src/app/components/auth/auth.module.ts
```

### Auth module - Login component

```
ng g component components/auth/components/Login -m components/auth/auth.module.ts --spec

# then you will see:

create src/app/components/auth/components/login/login.component.scss
create src/app/components/auth/components/login/login.component.html
create src/app/components/auth/components/login/login.component.spec.ts
create src/app/components/auth/components/login/login.component.ts
update src/app/components/auth/auth.module.ts
```

## tree

```
|____app.component.html
|____app-routing.module.ts
|____app.component.scss
|____app.component.spec.ts
|____app.module.ts
|____app.component.ts
|____components
| |____auth
| | |____components
| | | |____landing
| | | | |____landing.component.spec.ts
| | | | |____landing.component.ts
| | | | |____landing.component.html
| | | | |____landing.component.scss
| | | |____signup
| | | | |____signup.component.ts
| | | | |____signup.component.spec.ts
| | | | |____signup.component.html
| | | | |____signup.component.scss
| | | |____login
| | | | |____login.component.spec.ts
| | | | |____login.component.ts
| | | | |____login.component.scss
| | | | |____login.component.html
| | |____auth-routing.module.ts
| | |____auth.module.ts
```

## Auth module routing and App module routing

- https://angular.io/api/router/RouterModule

- https://angular.io/guide/lazy-loading-ngmodules

- https://angular.io/guide/router#the-appcomponent-shell

- https://angular.io/guide/router#router-outlet


### Landing works!

- http://localhost:4200/auth

### Login works!

- http://localhost:4200/auth/login

### Signup works!

- http://localhost:4200/auth/signup

## ng serve

```
chunk {auth.module} auth.module.chunk.js
chunk {inline} inline.bundle.js
chunk {main} main.bundle.js
chunk {polyfills} polyfills.bundle.js
chunk {styles} styles.bundle.js
chunk {vendor} vendor.bundle.js
```

## Let's create a sharable Material Module

- https://material.angular.io/guide/getting-started

```
yarn add @angular/material @angular/cdk @angular/animations
```

```
ng g module shared/Material --flat false

# then you will see:

create src/app/shared/material/material.module.ts
```

### Play with Card Content Container and [routerLink] parameters

Now we have routes configured and a place to render them, but how do we navigate?

- https://material.angular.io/components/card/examples

- https://material.angular.io/components/button/examples

- https://angular.io/guide/router#link-parameters-array
