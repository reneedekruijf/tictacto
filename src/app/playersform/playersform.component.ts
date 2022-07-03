import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShowboardService } from '../services/showboard.service';

interface Players {
  firstPlayer: string;
  secondPlayer: string;
  startGame: boolean;
}
@Component({
  selector: 'app-playersform',
  templateUrl: './playersform.component.html',
  styleUrls: ['./playersform.component.scss']
})
export class PlayersformComponent {
  // TODO: add random deside wich player starts
  // TODO: add random decide wich player has the cross or the disk

  constructor(
    private readonly showboardService: ShowboardService
  ) { }

  players: Players = {
    firstPlayer: '',
    secondPlayer: '',
    startGame: false,
  }

  twoPlayers: boolean = false;


  playersForm = new FormGroup({
    playerOne: new FormControl(''),
    playerTwo: new FormControl('')
  })

  onSubmit() {
    this.players = {
      firstPlayer: this.playersForm.value.playerOne as string,
      secondPlayer: this.playersForm.value.playerTwo as string,
      startGame: true
    }
    this.showboardService.sendData(true);
  }
}
