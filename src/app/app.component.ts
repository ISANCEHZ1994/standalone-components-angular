import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

// remember: the idea of standalone components is to not use modules!
// as such we throught this application we are removing module.ts files and replacing with component.ts files

@Component({
  standalone: true,
  imports: [
    WelcomeComponent,

  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
