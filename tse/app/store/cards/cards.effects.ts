import { CardsService } from './../../cards.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as cards from './cards.actions';

@Injectable()
export class CardsEffects {

    @Effect()
    loadCards$: Observable<Action> = this.actions$
        .ofType(cards.LOAD)
        .startWith(cards.LOAD)
        .switchMap(() => {
            const cardCollection = this.cardsService.getCards();
            return of(new cards.LoadSuccessAction(cardCollection));
        })

    constructor(private actions$: Actions, private cardsService: CardsService) {

    }

}