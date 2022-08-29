import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

// a description of creating a standalone component is indside of details.component.html
// basically how to create an Angular Component without using NgModule wrapper ({})

@Component({
  standalone: true,
  // now that SharedModule is imported - we can now see the purple background reappear because the 
  // (HIGHLIGHT) direcitve sees the changes it needs to do (purple color)
  imports: [
    HighlightDirective
  ],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {};

  onClick() {
    this.analyticsService.registerClick();
  };

};
