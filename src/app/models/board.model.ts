export interface Players {
  firstPlayer: string;
  secondPlayer: string;
  startGame: boolean;
}

export interface BoardData {
  boardsQuares: [{
    id: number;
    cross: boolean;
    disk: boolean;
  }];
}
