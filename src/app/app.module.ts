import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

//Importar rutas:
import { ROUTES } from './app.routes';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
