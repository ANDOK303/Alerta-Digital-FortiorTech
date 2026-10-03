import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const usuarioStr = localStorage.getItem('usuario');

  if (usuarioStr) {
    const usuario = JSON.parse(usuarioStr);
    if (usuario.rol === 'admin' || usuario.id_rol === 1) {
      return true;
    }
  }

  router.navigate(['/home']);
  return false;
};