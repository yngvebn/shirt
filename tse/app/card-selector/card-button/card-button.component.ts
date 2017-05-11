import { Card } from './../../store/cards/card.model';
import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'tse-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent implements OnInit {

  @Input() card: Card;
  @Output() onSelect: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() {
  }

}
