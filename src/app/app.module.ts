import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalizePipe } from './capitalize.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    PipesComponent,
    CapitalizePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
