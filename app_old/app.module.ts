import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstimateComponent } from './estimate/estimate.component';
import { NumbersComponent } from './estimate/numbers/numbers.component';
import { ShirtsComponent } from './estimate/shirts/shirts.component';
import { HammerGesturesDirective } from './hammer/hammer-gestures.directive';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20 } // override default settings
  }
}

@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot()],
  declarations: [AppComponent, MenuComponent, EstimateComponent, NumbersComponent, ShirtsComponent,
    HammerGesturesDirective],
  bootstrap: [AppComponent],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }]
})
export class AppModule { }
