# Node Installer
- node -v 
- npm -v

# Node installer comes with followings -
- Node Runtime Environment (NRE)
- Node Package Manager (NPM)
- Node Native/Core Modules

# Generate Package.json
- npm init -y
- npm install bootstrap@4 jquery@3 --save

# ES2015+ / Latest JavaScript
- Arrow Functions -> 
- let/const
- Spread/Rest ->
- Destructuring ->
- Class Syntax
- Inheritance
- Module System (ES6 Module) -> import / export keywords -> 

# TypeScript :
1. Microsoft JavaScript Extension
2. Strict type checking
3. Type Definition
4. OO Concepts
5. Latest JS 
6. Compile time errors

# TypeScript has to be transpiled to run in browsers / Node
1. Babel
2. Typescript compiler  > npm install typescript -g
3. Traceur

# Angular App can be developed using Typescript, JavaScript, DART

# To create angular boilerplate, we need Angular CLI Tool
- npm install @angular/cli@9 -g
- ng --version
- ng new <project-name> | users-app
- cd users-app
- ng serve --open

WebpackDevServer - localhost:4200

- ng build --production

# Each ng App should have one Root Module and one Root Component

# Angular CLI Tool : can generate any building block e.g Component | Directives | Pipes| Services | Module

# ng g c components/users/user

# to Install Bootstrap
- npm install bootstrap@4 --save

# Service Singleton is restricted to injected Scope

# Hierarchical Injection

- If we provide Service in Root Module : Singleton instance will be available to All Components & All Services

- If we provide Service in Root Component : Singleton instance will be available to Root Component and its child component, but not in other services

- If we provide service in Other Components : Singleton instance will be available to only that component and its child component, but not in other services


# Observables
- By default are Synchronous
- Observables do not get completed, if any error occured on stream

# Firebase SDK
- npm install firebase --save

# to add Angular material component
- ng add @angular/material


# Testing
 - Component Testing
    > properties creation
    > properties poluated from services
    > template created from properties
 - Service
    > methods returning Array
    > methods returning Observables
    > methods returning Promises
 - Pipe
    > tranform method 
 - Service populate the Component Properties 

 - ng test --code-coverage

 - ng add @nguniversal/express-engine --clientProject="users-app"

 # Deployment - Firebase Cloud
 1. npm install -g firebase-tools
 2. firebase login
 3. firebase init
 4. firebase deploy

 # deployed URL in last folder - Day6 Assignment
 # 

 synergy2411@outlook.com