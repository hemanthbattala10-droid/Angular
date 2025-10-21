import { Component,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {}

  //constructor(private auth: AuthService, private router: Router) { }

  async login() {
    await this.oktaAuth.signInWithRedirect();
  }

}
