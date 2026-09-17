import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Registro } from './views/registro/registro';
import { Home } from './views/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'home', component: Home },

  { path: '**', redirectTo: 'login' }
];
