import { Component, trigger, transition, style, animate, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'shirts',
    templateUrl: '/app/estimate/shirts/shirts.tpl.html',
    animations: [
        trigger(
            'myAnimation', [
                transition(':enter', [
                    style({ transform: 'scale(0)', opacity: 0 }),
                    animate('125ms  ease-in', style({ transform: 'scale(1)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'scale(1)', opacity: 1 }),
                    animate('125ms ease-in', style({ transform: 'scale(0)', opacity: 0 })),
                ])
            ]
        )
    ],
})
export class ShirtsComponent {
    numbers: Array<string>;
    isSelectedNumber: boolean;
    selectedNumber: string = '';
    @Output() shirtSelected: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.numbers = ['XS', 'S', 'M', 'L', 'XL'];
    }

    select(num: string) {
        if (this.selectedNumber === num && this.isSelectedNumber) {
            this.selectedNumber = '';
            this.isSelectedNumber = false;
        }
        else {
            this.selectedNumber = num;
            this.isSelectedNumber = this.selectedNumber !== '';
        }

        this.shirtSelected.emit(this.isSelectedNumber);
    }

}