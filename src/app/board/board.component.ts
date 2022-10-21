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
    // TODO: KISS and refactor

    let crosses = this.boardData.boardsQuares.map(item => item.cross);
    if (crosses[0] === true && crosses[1] === true && crosses[2] === true) {
      this.endResults('cross');
    }
    if (crosses[3] === true && crosses[4] === true && crosses[5] === true) {
      this.endResults('cross');
    }
    if (crosses[6] === true && crosses[7] === true && crosses[8] === true) {
      this.endResults('cross');
    }
    if (crosses[0] === true && crosses[4] === true && crosses[8] === true) {
      this.endResults('cross');
    }
    if (crosses[2] === true && crosses[4] === true && crosses[6] === true) {
      this.endResults('cross');
    }

    let disks = this.boardData.boardsQuares.map(item => item.disk);
    if (disks[0] === true && disks[1] === true && disks[2] === true) {
      this.endResults('disk');
    }
    if (disks[3] === true && disks[4] === true && disks[5] === true) {
      this.endResults('disk');
    }
    if (disks[6] === true && disks[7] === true && disks[8] === true) {
      this.endResults('disk');
    }
    if (disks[0] === true && disks[4] === true && disks[8] === true) {
      this.endResults('disk');
    }
    if (disks[2] === true && disks[4] === true && disks[6] === true) {
      this.endResults('disk');
    }
  }

  endResults(winner: string) {
    if (winner === 'cross') this.playersData.winnersName = this.players[0];
    if (winner === 'disk') this.playersData.winnersName = this.players[1];

    this.playersData.winner = true;
    this.boardData.gameFinished = true;
  }

  restart() {
    //TODO: also restart with keeping current users
    window.location.reload();
  }
}
