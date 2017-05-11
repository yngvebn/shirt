import { LoadSuccessAction } from './../store/cards/cards.actions';
import { Fibonacci } from './fibonacci';
import { getSelected, isCardSelected } from './../store/cards/cards.reducer';
import { Card } from '../store/cards/card.model';
import { Component, OnInit } from '@angular/core';
import { group, trigger, transition, style, animate } from '@angular/animations';
import * as fromRoot from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as cardActions from '../store/cards/cards.actions';

@Component({
  selector: 'tse-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        animate('0.5s 0.2s ease', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class CardSelectorComponent implements OnInit {
  cards$: Observable<Card[]>;
  selectedCard$: Observable<Card>;
  isCardSelected$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) {
    this.cards$ = this.store.select(fromRoot.getCards);
    this.selectedCard$ = this.store.select(fromRoot.getSelectedCard);
    this.isCardSelected$ = this.store.select(fromRoot.isCardSelected);
  }

  public cardSelected($event) {
    this.store.dispatch(new cardActions.SelectAction($event.id));
  }

  public resetSelection() {
    this.store.dispatch(new cardActions.ResetSelectionAction());
  }

  public trackByFn(index, item: Card) {
    return item.id;
  }

  public test() {
    this.store.dispatch(new cardActions.LoadSuccessAction(this.getCards()))
  }

  private getCards(): Card[] {
    const fib = new Fibonacci();
    return fib.run((Math.random() * 12) + 2).map(num => {
      return <Card>{
        content: num.toString(),
        id: num.toString()
      }
    })
  }

  ngOnInit() {

  }

}
