import { Component } from '@angular/core';
import { HammerGesturesDirective } from "../hammer/hammer-gestures.directive";


@Component({
    selector: 'estimate',
    templateUrl: '/app/estimate/estimate.tpl.html'
})
export class EstimateComponent {
    isNumbersActive: boolean = true;
    transform: string = 'translate3d(0, 0, 0)';
    currentDelta: number = 0;
    currentNumber: boolean;
    currentShirt: boolean;

    shirtEstimateSelected(val: any) {
        this.currentShirt = val;
    }

    numberEstimateSelected(val: any) {
        this.currentNumber = val;
    }

    doSwipe(ev: any) {
        if (this.currentShirt || this.currentNumber) return;
        if (ev.gesture === 'pan') {
            let deltaPercent = ((this.currentDelta + ev.event.deltaX) * 100 / ev.element.offsetWidth) * 200 / 100;
            this.transform = `translate3d(${deltaPercent}vw, 0, 0)`;
        }
        if (ev.gesture === 'panend') {
            let deltaPercent = ev.event.deltaX * 100 / ev.element.offsetWidth;
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