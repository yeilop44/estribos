import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { RebanoComponent } from './components/rebano/rebano.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AgriculturaComponent } from './components/agricultura/agricultura.component';
import { CostosComponent } from './components/costos/costos.component';


import { NuevoEventoModalComponent } from './components/rebano/nuevo-evento-modal/nuevo-evento-modal.component';
//Routes
import { app_routing }  from './app.routes';
import { EventosComponent } from './components/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    RebanoComponent,
    NavbarComponent,
    AgriculturaComponent,
    CostosComponent,
    NuevoEventoModalComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot() 

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ NuevoEventoModalComponent ]
})
export class AppModule { }
