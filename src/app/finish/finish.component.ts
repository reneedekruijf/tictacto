import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent {
  modal = true;

  @Input() playersInfo?: Players;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private showboardService: ShowboardService) {}

  restartGame() {
    this.newItemEvent.emit(false);
  }
}
