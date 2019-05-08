import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SpecificationComponent } from './specification/specification.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
