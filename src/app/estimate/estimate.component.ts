import { Component, OnInit } from '@angular/core';
import { HammerGesturesDirective } from '../hammer/hammer-gestures.directive';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent {
  isNumbersActive = true;
  transform = 'translate3d(0, 0, 0)';
  currentDelta = 0;
  currentNumber: boolean;
  currentShirt: boolean;

  shirtEstimateSelected(val: any) {
    this.currentShirt = val;
  }

  numberEstimateSelected(val: any) {
    this.currentNumber = val;
  }

  doSwipe(ev: any) {
    if (this.currentShirt || this.currentNumber) {
      return;
    }
    if (ev.gesture === 'pan') {
      const deltaPercent = ((this.currentDelta + ev.event.deltaX) * 100 / ev.element.offsetWidth) * 200 / 100;
      this.transform = `translate3d(${deltaPercent}vw, 0, 0)`;
    }
    if (ev.gesture === 'panend') {
      const deltaPercent = ev.event.deltaX * 100 / ev.element.offsetWidth;
      if (deltaPercent < 10) {
        this.currentDelta = ev.element.offsetWidth * -1 / 2;
        this.isNumbersActive = false;
        this.transform = `translate3d(-100vw, 0, 0)`;
      }
      if (deltaPercent > 10) {
        this.currentDelta = 0;
        this.isNumbersActive = true;
        this.transform = `translate3d(0, 0, 0)`;
      }
    }
  }
}
