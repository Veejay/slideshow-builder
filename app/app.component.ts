import {Component} from 'angular2/core';

@Component({
    selector: 'slideshow-builder',
    templateUrl: "app/templates/app-component.html",
    styleUrls: ['app/stylesheets/app-component.css']
})

export class AppComponent { 
    constructor() {
        this.name = "Application";
    }
}
