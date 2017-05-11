import { createSelector } from 'reselect';
import { Card } from './card.model';

import * as cards from './cards.actions';

export interface State {
    ids: string[];
    entities: { [id: string]: Card };
    selectedCardId: string | null;
};

export const initialState: State = {
    ids: [],
    entities: {},
    selectedCardId: null
};

export function reducer(state = initialState, action: cards.Actions): State {
    switch (action.type) {
        case cards.LOAD_SUCCESS: {
            const cards = action.payload;
            const cardIds = cards.map(card => card.id);

            const cardEntities = cards.reduce((entities: { [id: string]: Card }, card: Card) => {
                return Object.assign(entities, {
                    [card.id]: card
                });
            }, {});
            const selectedCardId = cardEntities[state.selectedCardId] ? state.selectedCardId : null;

            return {
                ids: [...cardIds],
                entities: cardEntities,
                selectedCardId: selectedCardId
            };
        }
        case cards.RESET: {
            return {
                ...state,
                selectedCardId: null
            }
        }
        case cards.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedCardId: action.payload
            };
        }
        default:
            return state;
    }
}


export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedCardId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const isCardSelected = createSelector(getSelectedId, (id) => id !== null);

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
