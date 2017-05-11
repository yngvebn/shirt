import { getSelected, isCardSelected } from './../store/cards/cards.reducer';
import { Card } from '../store/cards/card.model';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as cardActions from '../store/cards/cards.actions';

@Component({
  selector: 'tse-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss']
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
  ngOnInit() {

  }

}
