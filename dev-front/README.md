# DevFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Configurations & Librarys

npm i json-server
ng add @angular/material
ng add @ngrx/store
npm i @ngrx/effects

npm i swiper
npm i sass-loader
npm i ngx-toastr --save

## Default models, components, services
ng g m shared/material --flat=true
ng g class models\user.model
ng g s services/user
ng g c components/layout

# Authentication
ng g m components/users --routing
ng g m auth/auth --routing
ng g s auth/services/login

## Login using Google (No yet implemented)
npm i @abacritt/angularx-social-login --legacy-peer-deps
npm i angularx-social-login

# article to loging using google account
https://www.positronx.io/angular-google-social-login-tutorial-with-example/


