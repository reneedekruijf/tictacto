import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowboardService {

  @Output() changed: EventEmitter<any> = new EventEmitter();

  sendData(twoPlayers: boolean): any {
    this.changed.emit(twoPlayers);
  }
}
