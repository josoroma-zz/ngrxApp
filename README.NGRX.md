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

```
ng g module components/Auth --routing --flat false

# then you will see:

create src/app/components/auth/auth-routing.module.ts
create src/app/components/auth/auth.module.ts
```

### Auth module - Landing component

```
ng g component components/auth/components/Landing -m components/auth/auth.module.ts --spec

# then you will see:

create src/app/components/auth/components/landing/landing.component.scss
create src/app/components/auth/components/landing/landing.component.html
create src/app/components/auth/components/landing/landing.component.spec.ts
create src/app/components/auth/components/landing/landing.component.ts
update src/app/components/auth/auth.module.ts
```
