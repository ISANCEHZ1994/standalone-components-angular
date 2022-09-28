import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  standalone: true,
  // imports: [ <we will use this later when this becomes a standalone component> DetailsComponent ],
  imports: [ DetailsComponent ],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
