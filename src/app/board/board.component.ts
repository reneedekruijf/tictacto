import { Component, OnInit } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';
import { BoardData } from '../models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
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
    for (let i = 1; i <= 9; i++) {
      squares.push({ id: i, cross: false, disk: false, clickable: true });
    }
    return squares;
  }

  boardData: BoardData = {
    boardsQuares: this.setBoard(),
    gameFinished: false,
  };

  playerOne: boolean = true;
  playerTwo: boolean = false;

  players: string[] = [];

  playersData: Players = {
    firstPlayer: '',
    secondPlayer: '',
    startGame: false,
    winner: false,
    winnersName: '',
    winnersPiece: '',
  };

  constructor(private readonly showBoardService: ShowboardService) {}

  ngOnInit(): void {
    this.showBoardService.players.subscribe(res => {
      this.playersData = res;
      this.wichPlayerStarts(this.playersData);
    });
  }

  wichPlayerStarts(data: Players) {
    const playerToStart = [];
    playerToStart.push(data.firstPlayer, data.secondPlayer);
    this.players = playerToStart.sort((a, b) => 0.5 - Math.random());
  }

  timesPlayed: number = 1;
  handleMove(square: number): any {
    if (this.timesPlayed === 9) {
      this.boardData.gameFinished = true;
    }
    this.timesPlayed++;

    if (this.playerOne) {
      this.boardData.boardsQuares[square - 1].cross = true;
      this.playerOne = false;
      this.playerTwo = true;
      this.boardData.boardsQuares[square - 1].clickable = false;
    } else {
      this.boardData.boardsQuares[square - 1].disk = true;
      this.playerOne = true;
      this.playerTwo = false;
      this.boardData.boardsQuares[square - 1].clickable = false;
    }
    this.isThereWinner();
  }

  isThereWinner() {
    // TODO: KISS
    let crosses = this.boardData.boardsQuares.map(item => item.cross);
    // horizontal
    if (crosses[0] && crosses[1] && crosses[2]) this.endResults('cross');
    if (crosses[3] && crosses[4] && crosses[5]) this.endResults('cross');
    if (crosses[6] && crosses[7] && crosses[8]) this.endResults('cross');
    // diagonal
    if (crosses[0] && crosses[4] && crosses[8]) this.endResults('cross');
    if (crosses[2] && crosses[4] && crosses[6]) this.endResults('cross');
    // vertical
    if (crosses[0] && crosses[3] && crosses[6]) this.endResults('cross');
    if (crosses[1] && crosses[4] && crosses[7]) this.endResults('cross');
    if (crosses[2] && crosses[5] && crosses[8]) this.endResults('cross');

    let disks = this.boardData.boardsQuares.map(item => item.disk);
    if (disks[0] && disks[1] && disks[2]) this.endResults('disk');
    if (disks[3] && disks[4] && disks[5]) this.endResults('disk');
    if (disks[6] && disks[7] && disks[8]) this.endResults('disk');
    if (disks[0] && disks[4] && disks[8]) this.endResults('disk');
    if (disks[2] && disks[4] && disks[6]) this.endResults('disk');
    if (disks[0] && disks[3] && disks[6]) this.endResults('disk');
    if (disks[1] && disks[4] && disks[7]) this.endResults('disk');
    if (disks[2] && disks[5] && disks[8]) this.endResults('disk');
  }

  endResults(winner: string) {
    if (winner === 'cross') {
      this.playersData.winnersName = this.players[0];
      this.playersData.winnersPiece = 'cross';
    }
    if (winner === 'disk') {
      this.playersData.winnersName = this.players[1];
      this.playersData.winnersPiece = 'disk';
    }
    this.playersData.winner = true;
    this.boardData.gameFinished = true;
  }

  restart() {
    //TODO: also restart with keeping current users
    this.playersData.winnersName = '';
    window.location.reload();
  }
}
