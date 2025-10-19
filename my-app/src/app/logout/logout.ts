import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {
  constructor(private auth: Auth, private router: Router) { }
Logout() {
    this.auth.logout() ;
      this.router.navigate(['/login']);
     
  }
}
