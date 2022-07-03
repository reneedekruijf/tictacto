import { Component, OnInit } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cross: boolean = false;
  disk: boolean = false;

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
      })
    }

    handleMove(squareId: string) {
      this.disk = true;
    }
}
