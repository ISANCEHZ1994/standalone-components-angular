import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';

// a description of creating a standalone component is indside of details.component.html
// basically how to create an Angular Component without using NgModule wrapper ({})

@Component({
  standalone: true,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
