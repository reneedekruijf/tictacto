import { Component, OnInit } from '@angular/core';
import { ShowboardService } from '../services/showboard.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  players: boolean =  false;

  constructor(
    private readonly showBoardService: ShowboardService
    ) { }

    ngOnInit(): void {
      this.showBoardService.changed.subscribe(val => {

        this.players = val;
      })
    }
}
