import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Registro } from './views/registro/registro';
import { Home } from './views/home/home';
import { PruebasDenuncia } from './views/pruebas-denuncia/pruebas-denuncia';
import { PublicacionesForo } from './views/publicaciones-foro/publicaciones-foro';
import { CalificacionesPlataforma } from './views/calificaciones-plataforma/calificaciones-plataforma';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'home', component: Home },
  { path: 'pruebas-denuncia', component: PruebasDenuncia },
  { path: 'publicaciones-foro', component: PublicacionesForo },
  { path: 'calificaciones-plataforma', component: CalificacionesPlataforma },

  { path: '**', redirectTo: 'login' }
];
