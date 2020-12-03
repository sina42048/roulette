import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/models/auth';
import { SocketService } from '../socket.service';
import { Bet } from './models/bet';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  retriveAllBets$ = new BehaviorSubject<Bet[]>([]);
  newBetAdded$ = new Subject<Bet>();
  betAmount = 0;

  constructor(private toastr: ToastrService,
              private socketService: SocketService,
              private auth: AuthService) { }

  changeBetAmount($amount: number) {
    this.betAmount = $amount;
  }

  newBet(name: string, color: string) {
    if (this.auth.isLoggedIn) {
      if (this.betAmount > 0) {
        this.auth.loggedInUserData$.pipe(take(1)).subscribe((userData: User) => {
          this.toastr.info('new Bet Request Sent !', 'new Bet !' , {
            positionClass: 'toast-bottom-right'
          });
          this.socketService.emit('newBet', {
            token: userData.token,
            color: color,
            amount: this.betAmount
          });
          this.socketService.emit('updateFundRequest', {
            token: userData.token
          });
        });
      } else {
        this.toastr.warning('Please enter bet amount before submitting bet !', 'Enter Amount !' , {
          positionClass: 'toast-bottom-right'
        });
      }
    } else {
      this.toastr.error('Please sing in or sign up before placing bet !', 'Sign in' , {
        positionClass: 'toast-bottom-right'
      });
    }
  }
}
