import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowboardService {

  @Output() playersEntered: EventEmitter<any> = new EventEmitter();
  @Output() players: EventEmitter<any> = new EventEmitter();

  sendPlayersStatus(twoPlayers: boolean): any {
    this.playersEntered.emit(twoPlayers);
  }

  sendPlayersData(playersInfo: {}): any {
    this.players.emit(playersInfo);
  }
}
