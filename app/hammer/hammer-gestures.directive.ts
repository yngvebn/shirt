import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
@Directive({
    selector: '[hammer-gestures]'
})
export class HammerGesturesDirective implements AfterViewInit {
    @Output() onGesture = new EventEmitter();
    static hammerInitialized = false;
    constructor(private el: ElementRef) {
    }
    ngAfterViewInit() {
        if (!HammerGesturesDirective.hammerInitialized) {

            let hammertime = new Hammer(this.el.nativeElement);
            hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            hammertime.on("swipeup", (ev) => {
                this.onGesture.emit({ event: ev, gesture: "swipeup", element: this.el.nativeElement });
            });
            hammertime.on("swipedown", (ev) => {
                this.onGesture.emit({ event: ev, gesture: "swipedown", element: this.el.nativeElement });
            });
            hammertime.on("swipeleft", (ev) => {
                this.onGesture.emit({ event: ev, gesture: "swipeleft", element: this.el.nativeElement });
            });
            hammertime.on("swiperight", (ev) => {
                this.onGesture.emit({ event: ev, gesture: "swiperight", element: this.el.nativeElement });
            });
            hammertime.on("tap", (ev) => {
                this.onGesture.emit({ event: ev, gesture: "tap", element: this.el.nativeElement });
            });
            hammertime.on("pan", (ev) => {
                this.onGesture.emit({ event: ev, gesture: "pan", element: this.el.nativeElement });
            });
            hammertime.on("panend", (ev) => {
                this.onGesture.emit({ event: ev, gesture: "panend", element: this.el.nativeElement });
            });
            HammerGesturesDirective.hammerInitialized = true;
        }


    }
}
