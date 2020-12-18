import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { Ng9OdometerModule } from 'ng9-odometer';
import { TableModule } from 'ngx-easy-table';

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
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ResetPasswordComponent } from './auth/sign-in/reset-password/reset-password.component';
import { ActivationComponent } from './auth/activation/activation.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { ChangePasswordComponent } from './panel/change-password/change-password.component';
import { ChargeAccountComponent } from './panel/charge-account/charge-account.component';
import { BetHistoryComponent } from './panel/bet-history/bet-history.component';
import { SupportComponent } from './panel/support/support.component';



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
    AuthComponent,
    SignUpComponent,
    SignInComponent,
    ResetPasswordComponent,
    ActivationComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ChargeAccountComponent,
    BetHistoryComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    Ng9OdometerModule.forRoot(),
    TableModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
