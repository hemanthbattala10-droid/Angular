import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  template: `
    @if ((authStateService.authState$ | async)?.isAuthenticated) {
      <button (click)="confirmLogout()">Logout</button>
    }
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App {
  constructor(
    public authStateService: OktaAuthStateService,
    private router: Router,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth
  ) {}

  async confirmLogout() {
    if (confirm('Are you sure you want to log out?')) {
      await this.oktaAuth.signOut();
      // Optionally, navigate to a public route after logout:
      // this.router.navigate(['/welcome']);
    }
  }
}
