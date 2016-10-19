import { Component, trigger, transition, style, animate } from '@angular/core';
import { Fibonacci } from './Fibonacci';
@Component({
    selector: 'numbers',
    templateUrl: '/app/estimate/numbers/numbers.tpl.html',
    animations: [
        trigger(
            'myAnimation', [
                transition(':enter', [
                    style({ transform: 'scale(0)' }),
                    animate('125ms  ease-in', style({ transform: 'scale(1)' }))
                ]),
                transition(':leave', [
                    style({ transform: 'scale(1)' }),
                    animate('125ms ease-in', style({ transform: 'scale(0)' })),
                ])
            ]
        )
    ],

})
export class NumbersComponent {
    numbers: Array<number>;
    isSelectedNumber: boolean;
    selectedNumber: number = 0;

    constructor() {
        this.numbers = this.unique(new Fibonacci().run(7));
    }

    select(num: number) {
        if (this.selectedNumber === num && this.isSelectedNumber) {
            this.selectedNumber = 0;
            this.isSelectedNumber = false;
        }
        else {
            this.selectedNumber = num;
            this.isSelectedNumber = this.selectedNumber > 0;
        }
    }

    unique(numbers: Array<number>): Array<number> {
        var arr = [];
        for (var i = 0; i < numbers.length; i++) {
            if (arr.indexOf(numbers[i]) === -1 && numbers[i] > 0) {
                arr.push(numbers[i]);
            }
        }
        return arr;
    }
}