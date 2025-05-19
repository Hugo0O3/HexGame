import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    MenuComponent,
    GameComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
