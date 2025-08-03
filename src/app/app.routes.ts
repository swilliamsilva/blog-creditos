import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ApiConsultaCreditosComponent } from './api-consulta-creditos/api-consulta-creditos';
import { FrontendCreditosComponent } from './frontend-creditos/frontend-creditos';
import { ContatoComponent } from './contato/contato';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-consulta-creditos', component: ApiConsultaCreditosComponent },
  { path: 'frontend-creditos', component: FrontendCreditosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];

