import { Injectable, Inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {}

  // Begins the Okta OIDC login redirect
  async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }

  // Performs Okta logout/redirect to Okta logout page if configured
  async logout(): Promise<void> {
    await this.oktaAuth.signOut();
  }

  // Checks if user is authenticated (has a valid session/token)
  async isLoggedIn(): Promise<boolean> {
    return this.oktaAuth.isAuthenticated();
  }

  // (Optional) Get user claims/profile
  async getUser(): Promise<any> {
    return this.oktaAuth.getUser();
  }
}
