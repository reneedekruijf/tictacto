import { Component, OnInit } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  playersData: Players = {
    firstPlayer: '',
    secondPlayer: '',
    startGame: false,
  }

  constructor(
    private readonly showBoardService: ShowboardService
    ) { }

    ngOnInit(): void {
      // this.showBoardService.playersEntered.subscribe(res => {
      //   this.playersReady = res;
      // })
      this.showBoardService.players.subscribe(res => {
        this.playersData = res;
      })
    }
}
