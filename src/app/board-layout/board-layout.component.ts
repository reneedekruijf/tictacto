import { Component } from '@angular/core';

@Component({
  selector: 'app-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent {

  cross: boolean = false;
  disk: boolean = false;

  constructor() { }

  handleMove(squareId: string) {
    console.log(squareId);
    this.disk = true;
  }
}
