# Angular CLI + NGRX

- https://github.com/angular/angular-cli

- https://github.com/ngrx/platform/tree/master/example-app/app

- https://github.com/angular/angular/tree/master/aio/content/examples

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

## Theming our Angular Material app

- https://material.angular.io/guide/theming

- https://material.angular.io/guide/theming#using-a-pre-built-theme

## Let's define our User Model

- https://github.com/angular/angular-cli/wiki/generate-class

- https://github.com/ngrx/platform/blob/master/example-app/app/books/models/book.ts

```
ng g class models/user
```

### Forms

- https://angular.io/guide/forms

- https://material.angular.io/components/input/overview#changing-when-error-messages-are-shown

- https://github.com/angular/material2/blob/master/src/material-examples/input-error-state-matcher/input-error-state-matcher-example.ts

- https://github.com/angular/angular/blob/master/aio/content/examples/form-validation/src/app/template/hero-form-template.component.html

- https://github.com/angular/angular/blob/master/aio/content/examples/forms/src/app/hero-form/hero-form.component.html

**Reactive forms**:

- https://angular.io/guide/reactive-forms

```
yarn add @angular/forms
```

### Add a logger service

- https://angular.io/guide/architecture-services

- https://angular.io/tutorial/toh-pt4

- https://angularfirebase.com/lessons/methods-for-debugging-an-angular-application


```
ng g s services/Logger -m=components/auth/auth.module.ts

create src/app/services/logger.service.spec.ts
create src/app/services/logger.service.ts
update src/app/components/auth/auth.module.ts
```

## Submit and reset

- https://codecraft.tv/courses/angular/forms/submitting-and-resetting/

## Let's use a Reactive Model Form approach

- https://codecraft.tv/courses/angular/forms/reactive-model-form/


## Reactive forms

```
  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.email.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.logger.logInfo(term);
      });
  }
```

- `valueChages` returns an observable that emits the latest values. We can therefore subscribe to `valueChanges` to update instance variables or perform operations.

- `distinctUntilChanged` emits when the current value is different than the last:
  https://www.learnrxjs.io/operators/filtering/distinctuntilchanged.html

```
import 'rxjs/add/operator/distinctUntilChanged';
```

- `subscribe` to changes.

**Notes**:

- `do` is used for side-effects.

- `subscribe` is used to invoke an observable.

- Replacing `do` with `subscribe` creates undesired results.

- Replacing `subscribe` with `do` will not even invoke the stream.

If we are doing pure **functional reactive programming** we don't want any side effects in the stream. So, `do` is discouraged and mostly used only for debugging purposes.

## RxJS & Angular

- https://codecraft.tv/courses/angular/reactive-programming-with-rxjs/rxjs-and-angular/

## NGRX Store

- Store - immutable data structure.
- Actions - describe changes to state.
- Reducers - pure functions that create a new state.

### Install @ngrx/schematics and dependencies

- https://github.com/ngrx/platform/tree/master/docs/schematics

```
yarn add @ngrx/schematics --dev

yarn add @ngrx/{store,effects,entity,store-devtools}
```

### Generate the initial state management and register it within the app.module.ts

- https://github.com/ngrx/platform/tree/master/docs/schematics#initial-state-setup

- https://github.com/ngrx/platform/blob/master/docs/schematics/store.md

#### API

- https://github.com/ngrx/platform/blob/master/docs/store/api.md#meta-reducers

```
ng g st State --root -m app.module.ts -c @ngrx/schematics

create src/app/reducers/index.ts
update src/app/app.module.ts
```

ng g component components/auth/components/Signup -m components/auth/auth.module.ts --spec


## Initial Effects Setup

- https://github.com/ngrx/platform/tree/master/docs/schematics#initial-effects-setup

```
ng g ef App --root -m app.module.ts -c @ngrx/schematics --group

create src/app/effects/app.effects.ts
create src/app/effects/app.effects.spec.ts
update src/app/app.module.ts
```

```
app-routing.module.ts
app.component.html
app.component.scss
app.component.spec.ts
app.component.ts
app.module.ts           <==

components/
effects/                <==
models/
reducers/               <==
services/
shared/
```

## Generate a Feature Set for Auth

- https://github.com/ngrx/platform/blob/master/docs/schematics/feature.md

Store uses fractal state management, which provides state composition through feature modules, loaded eagerly or lazily.

- https://github.com/ngrx/platform/blob/master/docs/store/api.md#feature-module-state-composition

The `createSelector` method returns a callback function for selecting a slice of state.

- https://github.com/ngrx/platform/blob/master/docs/store/selectors.md#createselector

```
ng generate f components/auth/Auth -m auth.module.ts -g -c @ngrx/schematics

create src/app/components/auth/actions/auth.actions.ts
create src/app/components/auth/reducers/auth.reducer.ts
create src/app/components/auth/reducers/auth.reducer.spec.ts
create src/app/components/auth/effects/auth.effects.ts
create src/app/components/auth/effects/auth.effects.spec.ts
update src/app/components/auth/auth.module.ts
```

code src/app/components/auth/reducers/index.ts

```
import { createFeatureSelector } from '@ngrx/store';

import * as auth from './auth.reducer';

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
```

### Add a logger service

- https://github.com/angular/angular-cli/wiki/generate-service

```
ng g s components/auth/services/Auth -m=components/auth/auth.module.ts
```

## NGRX

- https://github.com/ngrx/platform/issues/850#issue-299134609

```
yarn add ngrx-store-freeze --dev
```

The example application organizes it like this:

- Main reducer file, which declares the state visible for all modules.

  https://github.com/ngrx/platform/blob/master/example-app/app/reducers/index.ts

- For each feature, a reducer file, which extends from that state and adds its part.

  https://github.com/ngrx/platform/blob/master/example-app/app/auth/reducers/index.ts

  `("export interface State extends fromRoot.State")`

- The components of that feature use that interface and the given selectors.

  https://github.com/ngrx/platform/blob/master/example-app/app/auth/containers/login-page.component.ts
  
We get the whole State from the Store and select the Substate we want from it via Selectors.
