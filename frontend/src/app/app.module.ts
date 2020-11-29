import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game.component';
import { RouletteComponent } from './game/roulette/roulette.component';
import { TimerComponent } from './game/timer/timer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    GameComponent,
    RouletteComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
