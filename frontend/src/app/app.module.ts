import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game.component';
import { RouletteComponent } from './game/roulette/roulette.component';
import { TimerComponent } from './game/timer/timer.component';
import { BetComponent } from './game/bet/bet.component';
import { LatestRollComponent } from './game/latest-roll/latest-roll.component';
import { BetControlComponent } from './game/bet-control/bet-control.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    GameComponent,
    RouletteComponent,
    TimerComponent,
    BetComponent,
    LatestRollComponent,
    BetControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
