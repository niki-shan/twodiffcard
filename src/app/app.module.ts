import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './shared/components/form/form.component';
import { CardComponent } from './shared/components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent
    
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
