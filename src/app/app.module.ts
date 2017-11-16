import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarIeElementComponent } from './components/bar-ie-element/bar-ie-element.component';

@NgModule({
  declarations: [
    AppComponent,
    BarIeElementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
