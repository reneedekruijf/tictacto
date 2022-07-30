import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CrossComponent } from './cross/cross.component';
import { DiskComponent } from './disk/disk.component';
import { PlayersformComponent } from './playersform/playersform.component';
import { AdDirective } from './directives/ad.directive';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CrossComponent,
    DiskComponent,
    PlayersformComponent,
    AdDirective,
    FinishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
