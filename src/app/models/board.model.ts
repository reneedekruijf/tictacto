export interface Players {
  firstPlayer: string;
  secondPlayer: string;
  startGame: boolean;
  winner: boolean;
}

export interface BoardData {
  boardsQuares: boardsQuaresData[];
  gameFinished: boolean;
}

export interface boardsQuaresData {
  id: number;
  disk: boolean;
  cross: boolean;
  clickable: boolean;
}
