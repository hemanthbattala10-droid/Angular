import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {
  name ='Hemanth';
  getgreeting(): string {
    return 'Welcome to your first component, ' + this.name + '!';
  }

}
