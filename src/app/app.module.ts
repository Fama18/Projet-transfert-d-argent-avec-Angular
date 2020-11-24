import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmetteursComponent } from './emetteurs/Emetteurs.Component';
import { AddEmmeteurComponent } from './add-emmeteur/add-emmeteur.component';

@NgModule({
  declarations: [
    AppComponent,
    EmetteursComponent,
    AddEmmeteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
