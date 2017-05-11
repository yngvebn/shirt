import { Card } from './../../store/cards/card.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tse-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.scss']
})
export class SelectedCardComponent implements OnInit {

  @Input() card: Card;
  @Output() onDismiss: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
