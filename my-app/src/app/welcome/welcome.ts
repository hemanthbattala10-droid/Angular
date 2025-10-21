import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1>Welcome to Our Application!</h1>
    <!-- Buttons visible to all users -->
    <button (click)="goTo('about')">About</button>
    <button (click)="goTo('help')">Help</button>
    
    <!-- Conditional Auth Buttons -->
    @if (!(authStateService.authState$ | async)?.isAuthenticated) {
      <button (click)="login()">Login</button>
    }
    @if ((authStateService.authState$ | async)?.isAuthenticated) {
      <button (click)="goTo('profile')">Profile</button>
      <button (click)="goTo('token')">Tokens</button>
    }
  `
})
export class Welcome {
  constructor(
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    public authStateService: OktaAuthStateService,
    private router: Router
  ) {}

  async login() {
    // Stay on welcome page after login ✅
    await this.oktaAuth.signInWithRedirect({ originalUri: window.location.pathname });
  }

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}


