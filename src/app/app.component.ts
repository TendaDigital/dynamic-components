import {Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor() {
  }

  getPages() {
    return [Page1Component, Page2Component]
  }
}
