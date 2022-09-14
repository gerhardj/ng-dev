# Mittwoch

* [Powerpoint Folien](https://integrationsonline-my.sharepoint.com/personal/alexander_pajer_integrations_at/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Falexander%5Fpajer%5Fintegrations%5Fat%2FDocuments%2FSlides%2Fng%2Ddev&ga=1)

## Styling

* https://www.w3schools.com/cssref/css_units.asp
    * rem und em ist bevorzugt, skaliert mit user interfaces mit
    * vw und vh, für relativ zur gesamtbreite (gut für wechselnde orientation)
* chrome extension: designer tools
* shadowDom - man kann was mit viewEncapsulation machen, aber eher im ausnahmefall
* material color picker (kann man einstellen - primäre&sekundäre farbe)
* Responsive Design: auf breite/höhe (und evtl orientation) anpassen
* CSS Styling Technologien:
    * Flexbox
        * gute Styling Idee: grow und min-width
    * Grid
* Angular flex layout
    * Github -> wiki -> static API


### Material

* https://material.angular.io/
    * Installations command: `ng add @angular/material`
* von Stackblitz die material importe kopieren (`material.module.ts`)

## Data Access

* Sidenote: Models als klassen initialisieren
* Ein paar Möglichkeiten: REST, GraphQL, (Websockets)
    * REST: https://jsonplaceholder.typicode.com/
    * GraphQL: https://graphql.org/swapi-graphql/
    * diese Infos sind vom Copilot gekommen
* json-api sollte reichen
* interceptor benutzen um zb auth header zu setzen
* außerdem kann beim HttpClient auch der raw response zurückgegeben werden

## Forms Design & Validation

* mittelding: FormControl (von reactive glaub ich, aber sind schon ohne form mächtiger)
* ReactiveForm
    * FormGroup -> (FormArray) -> FormControl