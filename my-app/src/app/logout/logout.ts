import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {
  constructor(private auth: AuthService, private router: Router) { }
Logout() {
    this.auth.logout() ;
      this.router.navigate(['/login']);
     
  }
}
