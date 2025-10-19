import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private isAuthenticated: boolean = false; 
  constructor() { }

  login(): boolean {
    // Simple authentication logic (for demonstration purposes)
   {
      this.isAuthenticated = true;
       console.log('User logged in');
    }
    return false;
  }
  logout(): void {
    this.isAuthenticated = false;
    console.log('User logged out');
  }
  
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  
}
