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
    doSwipe(ev: any) {
        if (ev.gesture === 'pan') {
            let deltaPercent = (this.currentDelta + ev.event.deltaX) * 100 / ev.element.offsetWidth;
            this.transform = `translate3d(${deltaPercent}%, 0, 0)`;
        }
        if (ev.gesture === 'panend') {
            let deltaPercent = ev.event.deltaX * 100 / ev.element.offsetWidth;
            if (deltaPercent < 10) {
                this.currentDelta = ev.element.offsetWidth * -1 / 2;
                this.isNumbersActive = false;
                this.transform = `translate3d(-49%, 0, 0)`;
            }
            if (deltaPercent > 10) {
                this.currentDelta = 0;
                this.isNumbersActive = true;
                this.transform = `translate3d(0%, 0, 0)`;
            }
        }
    }
}