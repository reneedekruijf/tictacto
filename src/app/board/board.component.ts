import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  cross: boolean = false;
  disk: boolean = false;

  constructor() { }

  handleMove(squareId: string) {
    console.log(squareId);
    this.disk = true;
  }
}
