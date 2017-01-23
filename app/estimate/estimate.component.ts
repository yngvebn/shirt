import { Component } from '@angular/core';
import { HammerGesturesDirective } from "../hammer/hammer-gestures.directive";

@Component({
    selector: 'estimate',
    templateUrl: 'estimate.tpl.html',
    styleUrls: ['estimate.component.scss']
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

    panEnd(ev: any) {
        console.log('panEnd', ev);
    }
    panRight(ev: any) {
        if (ev.isFinal) {
            this.isNumbersActive = true;
            // this.transform = `translate3d(0, 0, 0)`;
        }
        console.log('panRight', ev);
    }

    panLeft(ev: any) {
        if (ev.isFinal) {
            this.isNumbersActive = false;
            // this.transform = `translate3d(-100vw, 0, 0)`;
        }
        console.log('panLeft', ev);
    }


    panUp(ev: any) {
        console.log('panUp', ev);
    }

    panDown(ev: any) {
        console.log('panDown', ev);
    }

    doSwipe(ev: any) {
        if (this.currentShirt || this.currentNumber) return;
        if (ev.gesture === 'pan') {
            let deltaPercent = ((this.currentDelta + ev.event.deltaX) * 100 / ev.element.offsetWidth) * 200 / 100;
            this.transform = `translate3d(${deltaPercent}vw, 0, 0)`;
        }
        if (ev.gesture === 'panend') {
            let deltaPercent = ev.event.deltaX * 100 / ev.element.offsetWidth;
            console.log(deltaPercent);
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