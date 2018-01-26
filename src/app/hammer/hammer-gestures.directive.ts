import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as Hammer from 'hammerjs';

@Directive({
    selector: '[appHammerGestures]'
})
export class HammerGesturesDirective implements AfterViewInit {
    static hammerInitialized = false;

    @Output() gesture = new EventEmitter();
    constructor(private el: ElementRef) {
    }
    ngAfterViewInit() {
        if (!HammerGesturesDirective.hammerInitialized) {

            const hammertime = Hammer(this.el.nativeElement);
            hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            hammertime.on('swipeup', (ev) => {
                this.gesture.emit({ event: ev, gesture: 'swipeup', element: this.el.nativeElement });
            });
            hammertime.on('swipedown', (ev) => {
                this.gesture.emit({ event: ev, gesture: 'swipedown', element: this.el.nativeElement });
            });
            hammertime.on('swipeleft', (ev) => {
                this.gesture.emit({ event: ev, gesture: 'swipeleft', element: this.el.nativeElement });
            });
            hammertime.on('swiperight', (ev) => {
                this.gesture.emit({ event: ev, gesture: 'swiperight', element: this.el.nativeElement });
            });
            hammertime.on('tap', (ev) => {
                this.gesture.emit({ event: ev, gesture: 'tap', element: this.el.nativeElement });
            });
            hammertime.on('pan', (ev) => {
                this.gesture.emit({ event: ev, gesture: 'pan', element: this.el.nativeElement });
            });
            hammertime.on('panend', (ev) => {
                this.gesture.emit({ event: ev, gesture: 'panend', element: this.el.nativeElement });
            });
            HammerGesturesDirective.hammerInitialized = true;
        }


    }
}
