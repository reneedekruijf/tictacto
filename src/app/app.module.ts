import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CrossComponent } from './cross/cross.component';
import { DiskComponent } from './disk/disk.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CrossComponent,
    DiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
