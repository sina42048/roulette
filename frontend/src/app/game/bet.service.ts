import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/models/auth';
import { SocketService } from '../socket.service';
import { Bet, UserBet } from './models/bet';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BetService {
  retriveAllBets$ = new BehaviorSubject<Bet[]>([]);
  newBetAdded$ = new Subject<Bet>();
  betAmount = 0;

  constructor(private toastr: ToastrService,
              private socketService: SocketService,
              private auth: AuthService,
              private http: HttpClient) { }

  changeBetAmount($amount: number) {
    this.betAmount = $amount;
  }

  newBet(color: string) {
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

  getAllBets() {
    return this.http.post<UserBet[]>(environment.apiUrl + 'private/user-all-bets', {
      token: this.auth.token
    }).pipe(catchError(error => {
      if (error.status === 500) {
        this.toastr.error('Server Error, Try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }));
  }
}
