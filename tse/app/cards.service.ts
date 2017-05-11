import { Card } from './store/cards/card.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {

  constructor() { }

  public getCards(): Card[] {
    return [1, 2, 5, 8, 13].map(i => {
      return {
        id: i.toString(), content: i.toString()
      };
    });
  }


}
