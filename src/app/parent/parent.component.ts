import {Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import {Page1Component} from "../page1/page1.component";
import {Page2Component} from "../page2/page2.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input('pages') pages
  @ViewChild('parent', { read: ViewContainerRef }) parent: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    setTimeout(() => {
      const components = this.pages.map((page) => {
        return this.componentFactoryResolver.resolveComponentFactory(page)
      })
      this.parent.createComponent(components[1])
      setTimeout(() => {
        this.parent.clear()
        this.parent.createComponent(components[0])
      }, 1000)
    }, 0)
  }



  ngOnInit() { }

}
