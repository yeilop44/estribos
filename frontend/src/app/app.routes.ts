import { RouterModule, Routes } from '@angular/router';
import { RebanoComponent } from './components/rebano/rebano.component';
import { AgriculturaComponent } from './components/agricultura/agricultura.component';
import { CostosComponent } from './components/costos/costos.component';
import { EventosComponent } from './components/eventos/eventos.component';

export const appRoutes: Routes = [
    { path: 'rebano', component: RebanoComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'agricultura', component: AgriculturaComponent },
    { path: 'costos', component: CostosComponent },
    {path: '', pathMatch: 'full', redirectTo: 'rebano'},
    { path: '**', component: RebanoComponent }
    
  ];

  export const app_routing = RouterModule.forRoot(appRoutes, {useHash: false});