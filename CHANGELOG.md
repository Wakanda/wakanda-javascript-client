# Wakanda Javascript Client

## v2.0.0
- [Feature] Update directory methods names from `currentXXX` to `getCurrentXXX`

## v0.6.0 - Beta
- [Feature] Update typings dependencies
- [Bugfix] Remove typings on the module publish

## v0.5.0 - Beta

- [Feature] Support of the multimodel and handle a specific given catalog
- [Bugfix] Use dataClass dataURI instead of the name of the dataClass in REST requests
- [Bugfix] Use collection dataURI to fetch a collection
- [Test] Update the test solution *wakanda-solution* to the *new scaffolding*
- [Test] Add a *new virtual model* to wakanda-solution test

## v0.4.0 - Beta

- [Feature] Handling `date` and `simple date` attributes
- [Bugfix] Fix upload/remove files
- [Bugfix] Update only changed attributes of an entity
- [Bugfix] Fix on expanding implicitly related entity after an update

## v0.3.6 - Beta

- [Bugfix] Fix bug getting related entities DataClass name

## v0.3.5 - Beta

- [Bugfix] Fix issue while calling `getCatalog()` with an empty data model

## v0.3.4 - Beta

- [Bugfix] Fix issue No CustomEvent polyfill in WakandaClient causing bug in IE9

## v0.3.3 - Beta

- [Bugfix] Fix an issue with `login()` method that could fail when CORS was enabled on Wakanda Server

## v0.3.2 - Beta

- [Bugfix] Fix issue with numeric and boolean values `false` and `0` that could be ignored during REST API communication
- [Bugfix] Correct issue with `Date` objects used on `query()` options
- [Security] Entity deletion request are now sent with `POST` HTTP verb to comply with REST API change
- [Misc] Add tslint, edit consequently sources to fix all linting issues
- [Misc] Bind `WakandaClient.version()` method to the version on `package.json`

## v0.3.1 - Beta

- [Bugfix] Fix issue with missing dependencies on `package.json`

## v0.3.0 - Beta

- [Refactoring] Split up data access layer into two layers of service: a "base" one that is totally stateless, another that can carry some information about the handled data
- [Feature] Exposes the base services on built module
- [Misc] Rework CommonJS exposed module
- [Misc] Clean declaration file for TypeScript

## v0.2.0 - Beta

- [Feature] Support of server methods for collections
- [Feature] Throw error if non-allowed properties are passed as option for `find`, `query` and `fetch` methods
- [Feature] Add `recompute` method, to execute server-side logic (calculated attribute computation, init and clientrefresh events) to the local entity
- [Bugfix] Throw an error if a partial catalog is retrieved with not all needed dataClasses (related attributes, etc.)
- [Bugfix] `fetch` called on a already fetched collection will keep previously defined `pageSize` if another one is not given
- [Test] Integration tests for collection methods
- [Test] Integration tests for automatic transformation of sever methods into collection or entities when needed
- [Test] Integration tests for `isEntity` and `isCollection` helpers
- [Misc] Add `Contacts` Wakanda Solution on repository (used for integration tests)

#### Known issues

- Collections returned by server methods can not properly call methods like `nextPage`, `prevPage` or server methods
- Expanded collections (the ones retrieved with `select` option) do not properly retrieve result of server methods if it's a collection or an entity


## v0.1.0 - Beta

Initial release
