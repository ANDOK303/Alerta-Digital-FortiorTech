import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Registro } from './views/registro/registro';
import { Home } from './views/home/home';
import { Denuncias } from './views/denuncias/denuncias';
import { PruebasDenuncia } from './views/pruebas-denuncia/pruebas-denuncia';
import { PublicacionesForo } from './views/publicaciones-foro/publicaciones-foro';
import { CalificacionesPlataforma } from './views/calificaciones-plataforma/calificaciones-plataforma';
import { HomePublica } from './views/home-publica/home-publica';
import { TerminosCondiciones } from './views/terminos-condiciones/terminos-condiciones';
import { Perfil } from './views/perfil/perfil';
import { HilosForo } from './views/hilos-foro/hilos-foro';

export const routes: Routes = [
  { path: '', redirectTo: 'home-publica', pathMatch: 'full' },
  { path: 'perfil', component: Perfil },
  { path: 'home-publica', component: HomePublica },
  { path: 'terminos-condiciones', component: TerminosCondiciones },
  { path: 'denuncias', component: Denuncias },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'home', component: Home },
  { path: 'pruebas-denuncia', component: PruebasDenuncia },
  { path: 'publicaciones-foro', component: PublicacionesForo },
  { path: 'hilos-foro', component: HilosForo },
  { path: 'calificaciones-plataforma', component: CalificacionesPlataforma },

  { path: '**', redirectTo: 'home-publica' }
];
