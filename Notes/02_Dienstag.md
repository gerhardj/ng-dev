# Dienstag

## Angular Fundamentals

* convention: properties über constructor, methoden drunter
* interpolation: methoden und properties im html
* javascript backticks
* javascript decorator: für grundlegende konfiguration
* service muss ma ned in providers geben, wegen "providedIn: root"
* attribute binding: eckige klammern vom (html-)attribut
    * `[ngModel]`
    * `[(ngModel)]` - banana in a box (two-way)
    * ngModel geht auf das default attribut (zb bei checkbox auf "checked")
    * online editor: tinymce (tiny.cloud)
* container-presenter pattern


## Routing

* router outlet verwenden, da wird dann jeweils die component/module ausgetauscht
* routerLink, queryParams, fragment (Link in page (anchor tag))
* keine Snapshots verwenden - paramMap: siehe beispiel paramMap (wenn sich routen ändern können)