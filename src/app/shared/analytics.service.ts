import { Injectable } from '@angular/core';

// checking out services in standalone components: so far pretty simple not too complex

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  registerClick() {
    console.log('Clicked!');
  };
};
