import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { startcomponent } from './shared/StartCode/star.component';
import {RouterModule} from '@angular/router';
import { ProductdetailsComponent } from './products/productdetails.component';
import { WelcomeComponent } from './welcome.component'


@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacesPipe,
    startcomponent,
    ProductdetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'products', component: productListComponent},
      { path:'products/:id', component:ProductdetailsComponent},
      { path:'welcome', component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
