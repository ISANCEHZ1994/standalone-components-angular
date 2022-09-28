import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';
// import { SharedModule } 'src/app/shared/shared.module';

// a description of creating a standalone component is indside of details.component.html
// basically how to create an Angular Component without using NgModule wrapper ({})

@Component({
  // standalone is a boolean that we assign true
  standalone: true,
  // now that is is stand alone - it can be used in other components however 
  // now that SharedModule is imported - we can now see the purple background reappear because the 
  // (HIGHLIGHT) direcitve sees the changes it needs to do (purple color)
  imports: [
    // SharedModule, - we no longer need this because we are directly importing the directive.ts (highlight)
    HighlightDirective
  ],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  // using below is the standard way of adding services where you want to use it
  // techincally will still work because of the constructor() inside of the class
  // providers: [
  //   AnalyticsService
  // ]
  // check out file: main.ts
  // now coming back that is ANOTHER way of providing services however
  // the BEST method would still be in the analytics.service.ts file: {providedIn: 'root'}
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {};

  onClick() {
    this.analyticsService.registerClick();
  };

};
