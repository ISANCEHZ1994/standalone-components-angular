import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  // imports: [ <we will use this later when this becomes a standalone component> DetailsComponent ],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
