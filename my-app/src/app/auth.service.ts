import { Injectable, Inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {}

  // Triggers the Okta login redirect
  async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }

  // Triggers the Okta logout
  async logout(): Promise<void> {
    await this.oktaAuth.signOut();
  }

  // Checks if the user is authenticated
  async isLoggedIn(): Promise<boolean> {
    return this.oktaAuth.isAuthenticated();
  }

  // Gets the user profile from Okta
  async getUser(): Promise<any> {
    return this.oktaAuth.getUser();
  }

  // Checks Department, Organization, and EmployeeNumber for access
  async hasAccessAttributes(): Promise<boolean> {
    const user = await this.oktaAuth.getUser();
    // Check actual claim names in your Okta user profile!
    //const departmentOk = user['aud'] === 'App5475856';            // or user.department
   // const orgOk = user['sub'] === 'YourOrg';              // or user.organization
    const empNumberOk = user['employeenumber'] === 'hemanth.battala';
    return  empNumberOk;
  }
}
