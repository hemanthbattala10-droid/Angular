import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AttributeGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!(await authService.isLoggedIn())) {
    alert('Evadra nuv. Login chey beyfirst');
    await authService.login();
    return false;
  }

  if (await authService.hasAccessAttributes()) {
    return true;
  }
  
  alert(' ey! pora pilla bachha nayala niku access ledu.');
  router.navigate(['/welcome']);
  return false;
};
