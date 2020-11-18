import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DziedziczenieComponent } from './dziedziczenie.component';
import { PojazdComponent } from './pojazd.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DziedziczenieComponent,
    PojazdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule             //daje możliwość kożystania z dyrektywy ngModel
  ],
  providers: [],
  bootstrap: [AppComponent,DziedziczenieComponent,PojazdComponent]
})
export class AppModule { }
