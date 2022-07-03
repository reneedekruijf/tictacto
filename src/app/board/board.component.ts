import { Component, OnInit } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // TODO: add random deside wich player starts, X starts

  cross: boolean = false;
  disk: boolean = false;

  playerWhoToStart: string[] = [];

  playersData: Players = {
    firstPlayer: '',
    secondPlayer: '',
    startGame: false,
  }

  constructor(
    private readonly showBoardService: ShowboardService
    ) { }

    ngOnInit(): void {
      this.showBoardService.players.subscribe(res => {
        this.playersData = res;
        this.wichPlayerStarts(this.playersData);
      })
    }

    wichPlayerStarts(data: Players) {
      const playerToStart = [];
      playerToStart.push(data.firstPlayer, data.secondPlayer);
      this.playerWhoToStart = playerToStart.sort((a, b) => 0.5 - Math.random());
    }

    handleMove(squareId: string) {
      this.disk = true;
    }
}
