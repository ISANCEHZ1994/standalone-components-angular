import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// a description of creating a standalone component is indside of details.component.html

import { AppComponent } from './app.component';
import { DetailsComponent } from './welcome/details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent, 
    // DetailsComponent
  ],
  imports: [
    BrowserModule, 
    // SharedModule,
    DetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
