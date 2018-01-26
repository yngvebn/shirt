import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { EstimateComponent } from './estimate/estimate.component';
import { HammerGesturesDirective } from './hammer/hammer-gestures.directive';
import { NumbersComponent } from './estimate/numbers/numbers.component';
import { ShirtsComponent } from './estimate/shirts/shirts.component';

@NgModule({
  declarations: [
    AppComponent,
    HammerGesturesDirective,
    EstimateComponent,
    NumbersComponent,
    ShirtsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
