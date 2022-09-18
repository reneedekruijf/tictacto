import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowboardService {
  @Output() players: EventEmitter<any> = new EventEmitter();

  sendPlayersData(playersInfo: {}): any {
    this.players.emit(playersInfo);
  }
}
