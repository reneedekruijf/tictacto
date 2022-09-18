import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent {
  modal = true;
  noWinner = true;
  winner = false;

  @Output() newItemEvent = new EventEmitter<boolean>();

  restartGame() {
    this.modal = false;
    this.newItemEvent.emit(this.modal);
  }

  constructor() {}
}
