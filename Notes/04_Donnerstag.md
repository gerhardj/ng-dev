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