# clean-architecture-node-js

The idea is to create a simple API where it will save leads from the website's contact form. Also, this API should be responsible to send an email to:

- The client
- The stakeholder

## SOLID Architecture in my words

> If you can't explain it simply, you don't understand it well enough.
>
> -- <cite>Albert Einstein</cite>

### Single Responsibility Principle

Each Class should have only one responbility and proporse. It's preferable to have simple and smaller classes.

### Open/Closed Principle

Each Class should be:

- Open for extensions (through Design Patterns)
- Closed for changes

### Liskov Substitution Principle

### Interface Segregation Principle

It's very similar to SRP, but more focused on Interfaces. Each Interface should have your own responsability and they should not have unnecessary items.

A Interface should be a contract with very strict and necessary terms (methods).

### Dependency Inversion Principle

Depends on Instances instead of Objects and Classes. With Instances you have:

- A Contract, so it doesn't matter external details (like database type, presentation, etc.);
- This Contract has only the necessary items. When we have unnecessary items being available and being able to be used, undesired problems could come

## Not SOLID, but important

### Demeter Principle

This principle doesn't belong to SOLID, but it's important to remind some concetps from it and apply them.

A Class should call only:

- Its methods
- Methods from objects (receiveds through params)
- Methods from objects (built by Class itself)

## Structure

This project will follow the Clean Architecture (SOLID) suggested by Robert C. Martin. I know there are other architectures (Onion, Hexagonal), but for this specific project it's gonna be Clean Architecture.

```
src
+-- entities
    +-- entity
        +-- Lead.js
        +-- LeadRepositoryInterface.js
+-- app
    +-- CreateLead
        +-- CreateLead.js                   # Class
        +-- CreateLead.test.js              # Unit Tests
        +-- CreateLead.requirements.md      # Use Case in Normal Language
+-- adapters
    +-- topic (e.g.: controllers, routes, serializers)
        +-- topic1.js (e.g.: LeadController.js, LeadRoutes.js, LeadSerializer.js)
+-- externals
    +-- lib1 (Express, Inquirer, Sequelize, Rollbar, Sentry, etc.)
+-- index.js            # Starts the application (in this case, the server - from externals)
```

## Commits

The automated tests will be checked for every pre commit. It will not be allowed to commit if they don't pass.

## Improvements and Ideas

By doing this simple project, I discovered some answers for my questions:

- WIP
- Why Unit Tests are better than Integration?

### What is a good workflow to write good automated tests without losing productivity?

WIP
