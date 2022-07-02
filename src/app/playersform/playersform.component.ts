import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-playersform',
  templateUrl: './playersform.component.html',
  styleUrls: ['./playersform.component.scss']
})
export class PlayersformComponent {
  // TODO: add random deside wich player starts
  // TODO: add random decide wich player has the cross or the disk

  constructor() { }

  firstPlayer: string = '';
  secondPlayer: string = '';

  play: boolean = false;

  playersForm = new FormGroup({
    playerOne: new FormControl(''),
    playerTwo: new FormControl('')
  })

  onSubmit() {
    this.firstPlayer = this.playersForm.value.playerOne as string;
    this.secondPlayer = this.playersForm.value.playerTwo as string;
    this.play = true;
  }
}
