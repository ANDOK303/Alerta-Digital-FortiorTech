import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Registro } from './views/registro/registro';
import { Home } from './views/home/home';
import { Denuncias } from './views/denuncias/denuncias';
import { Categorias } from './views/categorias/categorias';
import { HilosForo } from './views/hilos-foro/hilos-foro';
import { Recomendaciones } from './views/recomendaciones/recomendaciones';
import { Usuarios } from './views/usuarios/usuarios';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'home', component: Home },

  { path: 'denuncias', component: Denuncias },
  { path: 'categorias', component: Categorias },
  { path: 'hilos-foro', component: HilosForo },
  { path: 'recomendaciones', component: Recomendaciones },
  { path: 'usuarios', component: Usuarios },

  { path: '**', redirectTo: 'login' }
];