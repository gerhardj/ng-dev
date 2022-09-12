# Montag

## Generelle Kurseinführung

* rem ... relativ zur Schriftgröße des root-elements (default: 16px)
* angular-cli
* frequent-ngmodules
* Angular DevTools
* "reset meyer"
* vh ... view height, vw analog

## Typescript

* [typescriptlang.org](https://typescriptlang.org)
* es2020 - infos in `tsconfig.json`
* polyfills - caniuse.com
* undefined gibts in TS eigtl ned

Demos

* haben kein UI, in Demos, samples
    * also schon, button klicken zum ausführen...

* "airbnb styleguide"
* function overloads - recht nervig zu schreiben (manuelle fallunterscheidung im body - eher nicht machen)
* `Object.assign(...)` - wichtiges pattern: "object composition"(~)
    * deepCopy: zb in lodash (`_.cloneDeep()`)
    * geht auch mit spread operator (preferred syntax)
* strictPropertyInitialisation: wegen JS eigenheit (new ... erzeugt keine leeren objekte gscheit)
* constructor heißt `constructor()`
    * implizite klassenvariablen mit "private|public" im konstruktor
* public by default

### ES6 Utils

* es6-features.org

* json-server - fake rest server (npm i -g)
* REST Client Extension (in VSCode)
* fetch API - antipattern (weil im Component direkt... usw)
* axios ... besser (wrapper für fetch basically, aber nicht in Angular)
* eigener http client ... aber im Service, nicht im Component