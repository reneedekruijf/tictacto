import { Component, OnInit } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';
import { BoardData } from '../models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // TODO: add a database / backend
  // TODO: logic for a winner: three the same
  // TODO: logic for no winner: no same = no winner
  // TODO: start over completly
  // TODO: start over with same players
  // TODO: keep the score of the same players

  setBoard() {
    const squares = [];
    for(let i=1; i<=9; i++) {
      squares.push({ id: i, cross: false, disk: false, clickable: true });
    }
    return squares;
  }

  boardData: BoardData = {
    boardsQuares: this.setBoard(),
    gameFinished: false
  }

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


  timesPlayed: number = 1;
  handleMove(square: number): any {
    if(this.timesPlayed === 9) {
      this.boardData.gameFinished = true;
    }
    this.timesPlayed++;

    if(this.playerOne && this.boardData.boardsQuares[square - 1].id === square) {
      this.boardData.boardsQuares[square - 1].cross = true;
      this.playerOne = false;
      this.playerTwo = true;
      this.boardData.boardsQuares[square - 1].clickable = false;
    } else if(this.playerTwo && this.boardData.boardsQuares[square - 1].id === square) {
      this.boardData.boardsQuares[square - 1].disk = true;
      this.playerOne = true;
      this.playerTwo = false;
      this.boardData.boardsQuares[square - 1].clickable = false;
    }
    this.checkForWinner();
  }

  checkForWinner() {
    // three on a row
    const threeOnRow: any = [];
    this.boardData.boardsQuares.forEach((item, index) => {
      threeOnRow.push(item.cross)
      console.log(threeOnRow);
    })
  }

  restart() {
  window.location.reload();
  }
}
