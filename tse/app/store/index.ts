import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as cardsReducer from './cards/cards.reducer';

export interface State {
    cards: cardsReducer.State;
}

const reducers = {
    cards: cardsReducer.reducer
};


const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getCardsState = (state: State) => state.cards;
export const getCards = createSelector(getCardsState, cardsReducer.getAll)
export const getCardEntities = createSelector(getCardsState, cardsReducer.getEntities);
export const getSelectedCard = createSelector(getCardsState, cardsReducer.getSelected);
export const isCardSelected = createSelector(getCardsState, cardsReducer.isCardSelected);