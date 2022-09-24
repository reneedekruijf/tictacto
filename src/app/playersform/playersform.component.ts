import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShowboardService } from '../services/showboard.service';
import { Players } from '../models/board.model';

@Component({
  selector: 'app-playersform',
  templateUrl: './playersform.component.html',
  styleUrls: ['./playersform.component.scss'],
})
export class PlayersformComponent {
  constructor(private readonly showboardService: ShowboardService) {}

  playersData: Players = {
    firstPlayer: '',
    secondPlayer: '',
    startGame: false,
    winner: false,
  };

  playersForm = new FormGroup({
    playerOne: new FormControl(''),
    playerTwo: new FormControl(''),
  });

  onSubmit() {
    this.showboardService.sendPlayersData(
      (this.playersData = {
        firstPlayer: this.playersForm.value.playerOne as string,
        secondPlayer: this.playersForm.value.playerTwo as string,
        startGame: true,
        winner: false,
      })
    );
  }
}
