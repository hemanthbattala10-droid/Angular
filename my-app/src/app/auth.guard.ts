import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);

  if (await authService.isLoggedIn()) {
    return true;
  }

  // Optional: Custom alert/message
  alert('Evadra nuv. Login chey beyfirst');

  // Initiate Okta login redirect
  await authService.login();
  return false; // Cancel original navigation (Okta takes over)
};
