# clean-architecture-node-js
The idea is to create a simple API where it will save leads from the website's contact form. Also, this API should be responsible to send an email to:

- The client
- The stakeholder

## Structure
This project will follow the Clean Architecture (SOLID) suggested by Robert C. Martin. I know there are other architectures (Onion, Hexagonal), but for this specific project it's gonna be Clean Architecture.

```
src
+-- entities
    +-- entity
        +-- entity.js (e.g.: Lead.js)
        +-- entity_repository.js (e.g.: LeadRepository.js -> Interface)
+-- application
    +-- use_case1
        +-- use_case1.js (e.g.: CreateLead.js, SendLeadByEmail.js)
        +-- use_case1_test.js
+-- adapters
    +-- topic (e.g.: controllers, routes, serializers)
        +-- topic1.js (e.g.: LeadController.js, LeadRoutes.js, LeadSerializer.js)
+-- externals
    +-- lib1 (Express, Inquirer, Sequelize, Rollbar, Sentry, etc.)
    +-- ...
+-- index.js            # Starts the application (in this case, the server - from externals)
```

## Commits
The automated tests will be checked for every pre commit. It will not be allowed to commit if they don't pass.

## Improvements and Ideas
By doing this simple project, I discovered some answers for my questions:

### What is a good workflow to write good automated tests without losing productivity?