import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';
import { BoardData } from '../models/board.model';
// import { AdDirective } from '../directives/ad.directive';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // TODO: add a database / backend

  // @ViewChild(AdDirective, {static: false}) appAdHost!: AdDirective;

  setBoard() {
    const squares = [];
    for(let i=1; i<=9; i++) {
      squares.push({ id: i, cross: false, disk: false });
    }
    return squares;
  }

  boardData: BoardData = {
    boardsQuares: this.setBoard()
  }

  disk: number = 0;
  cross: number = 0;
  squareClicked: number = 0;
  clicked: number = 0;

  playerOne: boolean = true;
  playerTwo: boolean = false;

  players: string[] = [];

  playersData: Players = {
    firstPlayer: '',
    secondPlayer: '',
    startGame: false,
  }

  constructor(
    private readonly showBoardService: ShowboardService,
    ) {}


    ngOnInit(): void {
      this.showBoardService.players.subscribe(res => {
        this.playersData = res;
        this.wichPlayerStarts(this.playersData);
      })
    }


    wichPlayerStarts(data: Players) {
      const playerToStart = [];
      playerToStart.push(data.firstPlayer, data.secondPlayer);
      this.players = playerToStart.sort((a, b) => 0.5 - Math.random());
    }


    handleMove(square: number): any {
      if(this.playerOne && this.boardData.boardsQuares[square - 1].id === square) {
        this.boardData.boardsQuares[square - 1].cross = true;
        this.playerOne = false;
        this.playerTwo = true;
        this.squareClicked = square;
      } else if(this.playerTwo && this.boardData.boardsQuares[square - 1].id === square) {
        this.boardData.boardsQuares[square - 1].disk = true;
        this.playerOne = true;
        this.playerTwo = false;
        this.squareClicked = square;
      }
    }
}
