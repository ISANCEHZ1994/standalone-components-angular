import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AnalyticsService } from './app/shared/analytics.service';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// if we want to imgrate the root component of our application - turn to standalone component

// INSTEAD of bootstraping with a MODULE:
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// bootstrap with a COMPONENT:
bootstrapApplication( AppComponent )
  // { 
  // since we are not using modules anymore..we can add this second object which will allow some configuration
  // we are globally providing AnalyticsService here
//     providers: [ AnalyticsService ]
// } );
// which means now that we can remove app.module.ts