import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ActivationComponent } from './auth/activation/activation.component';
import { GameComponent } from './game/game.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './panel/change-password/change-password.component';
import { ChargeAccountComponent } from './panel/charge-account/charge-account.component';
import { BetHistoryComponent } from './panel/bet-history/bet-history.component';
import { SupportComponent } from './panel/support/support.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'game' , component: GameComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'activation/:token', component: ActivationComponent },
  { path: 'panel', canActivateChild: [AuthGuard], children: [
    { path: '', component: DashboardComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'charge-account', component: ChargeAccountComponent },
    { path: 'bet-history', component: BetHistoryComponent },
    { path: 'support', component: SupportComponent }
  ]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
