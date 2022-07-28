export interface Players {
  firstPlayer: string;
  secondPlayer: string;
  startGame: boolean;
}

export interface BoardData {
  boardsQuares: boardsQuaresData[];
}

export interface boardsQuaresData {
  id: number;
  disk: boolean;
  cross: boolean;
}
