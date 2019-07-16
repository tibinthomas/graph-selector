import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WcGraphSelectorModule } from 'projects/wc-graph-selector/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WcGraphSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
