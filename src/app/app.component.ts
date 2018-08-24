import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <a [routerLink]="['/products']" >Products</a>
  
  <a [routerLink]="['/welcome']" >Welcome</a>
  </div>
  <router-outlet></router-outlet>
  `
})

export class AppComponent{
  pageTitle: string = "Angular Demo";
}