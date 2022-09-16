# Donnerstag

## Allgemeines

* Extension: Markdown Shortcuts

## Reactive Programming

* Observables -> viele Methoden -> beschrieben in RXJS
* zwei "Stile"
    * Imperative Programming: mit subscribe (und unsubscribe)
    * Reactive Programming: kein subscribe (pipe mit map, combineLatestWith...)
    * es gibt auch das deklarative pattern wo die definition direkt bei der property steht...
* beim canvas beispiel: local reference (`#signPad`) (aka template reference)

## State Management

* guter Stil wenns zumindest in der Session gespeichert wird - egal auf welchem Pfad ich grad bin
* ngrx und ngxs
* Subjects sind spezielle Observables (die Wichtigsten: Subject, BehaviorSubject, ReplaySubject)

## Testing

* Unit Tests
    * Karma & Jasmine
    * Alternative (weit verbreitet): Jest
        * ng add @briebug/jest-schematic
* End-to-End Tests
    * bekanntes, modernes Framework: Cypress
    * älter: Protractor (vielleicht noch in älteren Projekten vorhanden)
* Wallaby: Extension - nicht free (aber OS licence)
* `ng test`
* Jasmine Code Snippets (Extension)

* Cypress (siehe Code)

* gefunden - unklar ob gut: food-app-mysolution

## Updating (Einschub)

* `ng update ... --dirty --force`
* `npm outdated`
* Empfehlung: Häufig updaten (geht sogar mit breaking changes wegen der schematics)

## Authentication

* üblich JWT
* token based, OAuth2, OpenID, ...
* Firebase (leicht für den Einstieg) (Googles Cloud für Webapps)
    * im Webinterface Projekt anlegen und Authentifizierung hinzufügen
    * Config ins Angular Projekt kopieren
    * `ng add @angular/fire` (Copilot) | `npm install firebase @angular/fire` (Kurs)
    * `ng g guard auth --skip-tests` (Copilot)
* Fassadenservice: wie bei Firebase (ein kleiner Service der nur die Lib aufruft)