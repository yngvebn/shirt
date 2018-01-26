import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HammerGesturesDirective } from '../../hammer/hammer-gestures.directive';
import { trigger, transition, style, animate } from '@angular/animations';
import { Fibonacci } from './fibonacci';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
  animations: [
    trigger(
      'myAnimation', [
        transition(':enter', [
          style({ transform: 'scale(0.6)', opacity: 0 }),
          animate('125ms ease-in', style({ transform: 'scale(1)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'scale(1)', opacity: 1 }),
          animate('125ms ease-out', style({ transform: 'scale(0.6)', opacity: 0 })),
        ])
      ]
    )
  ],
})
export class NumbersComponent  {
  numbers: Array<number>;
  isSelectedNumber: boolean;
  selectedNumber: number;
  @Output() numberSelected: EventEmitter<boolean> = new EventEmitter();

  constructor() {
      this.numbers = this.unique(new Fibonacci().run(7));
  }

  select(num: number) {
      if (this.selectedNumber === num && this.isSelectedNumber) {
          this.selectedNumber = 0;
          this.isSelectedNumber = false;
      } else {
          this.selectedNumber = num;
          this.isSelectedNumber = this.selectedNumber > 0;
      }

      this.numberSelected.emit(this.isSelectedNumber);
  }


  unique(numbers: Array<number>): Array<number> {
      const arr = [];
      for (let i = 0; i < numbers.length; i++) {
          if (arr.indexOf(numbers[i]) === -1 && numbers[i] > 0) {
              arr.push(numbers[i]);
          }
      }
      return arr;
  }
}
