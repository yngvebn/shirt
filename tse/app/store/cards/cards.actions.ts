import { Action } from '@ngrx/store';
import { Card } from './card.model';

export const LOAD = '[Card] Load';
export const LOAD_SUCCESS = '[Card] Load Success';
export const SELECT = '[Card] Select';
export const RESET = '[Card] Reset';

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Card[]) { }
}
export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public payload: Card[]) { }
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload: string) { }
}

export class ResetSelectionAction implements Action {
    readonly type = RESET;

    constructor() { }
}

export type Actions
    = LoadSuccessAction
    | LoadAction
    | ResetSelectionAction
    | SelectAction;
