import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/models/auth';
import { SocketService } from '../socket.service';
import { BetService } from './bet.service';
import { Bet } from './models/bet';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit, OnDestroy {
  winnerAudio: HTMLAudioElement;
  allBets$: Subscription;
  newBetAddedToAllUser$: Subscription;
  betSuccess$: Subscription;
  betFailed$: Subscription;
  winner$: Subscription;
  userNotFound$: Subscription;
  insufficientFund$: Subscription;
  updateFund$: Subscription;

  constructor(private socketService: SocketService,
              private betService: BetService,
              private toastr: ToastrService,
              private auth: AuthService) {}

  ngOnInit(): void {
    this.winnerAudio = new Audio();

    this.socketService.emit('enteredGame');

    this.allBets$ = this.socketService.fromEvent('allBets').subscribe((bets: Bet[]) => {
      this.betService.retriveAllBets$.next(bets);
    });
    
    this.newBetAddedToAllUser$ = this.socketService.fromEvent('newBetAddedToAllUser').subscribe((bet: Bet) => {
      this.betService.newBetAdded$.next(bet);
    })

    this.betSuccess$ = this.socketService.fromEvent('betSuccess').subscribe(() => {
      this.toastr.success('Your Bet successfully Submitted !', 'Bet Submitted !' , {
        positionClass: 'toast-bottom-right',
        easeTime: 1000
      });
    });

    this.betFailed$ = this.socketService.fromEvent('betFailed').subscribe(() => {
      this.toastr.error('Wait For Next Round !', 'Rolling Time !' , {
        positionClass: 'toast-bottom-right',
        easeTime: 1000
      });
    });

    this.userNotFound$ = this.socketService.fromEvent('userNotFound').subscribe(() => {
      this.toastr.error('Failed to placing bet, plaese sign in again !', 'Failed' , {
        positionClass: 'toast-bottom-right',
        easeTime: 1000
      });
    });

    this.insufficientFund$ = this.socketService.fromEvent('insufficientFund').subscribe(() => {
      this.toastr.error('Charge your account !', 'Insufficient Fund' , {
        positionClass: 'toast-bottom-right',
        easeTime: 1000
      });
    });

    this.updateFund$ = this.socketService.fromEvent('updateFund').subscribe((fund: number) => {
      this.auth.loggedInUserData$.pipe(take(1)).subscribe((userData: User) => {
        const newUserData = {
          id: userData.id,
          email: userData.email,
          username: userData.username,
          token: userData.token,
          fund: fund,
          updatedAt: userData.updatedAt,
          createdAt: userData.createdAt
        };
        this.auth.loggedInUserData$.next(newUserData);
      });
    });

    this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor: string) => {
      if (winnerColor == 'red') {
        this.winnerAudio.src = '../../../../assets/red.ogg';
        this.winnerAudio.load();
        this.winnerAudio.play()
      } else if (winnerColor == 'green') {
        this.winnerAudio.src = '../../../../assets/green.ogg';
        this.winnerAudio.load();
        this.winnerAudio.play()
      } else {
        this.winnerAudio.src = '../../../../assets/black.ogg';
        this.winnerAudio.load();
        this.winnerAudio.play()
      }
    });
  }

  ngOnDestroy() {
    this.allBets$.unsubscribe();
    this.newBetAddedToAllUser$.unsubscribe();
    this.betSuccess$.unsubscribe();
    this.betFailed$.unsubscribe();
    this.winner$.unsubscribe();
    this.userNotFound$.unsubscribe();
    this.insufficientFund$.unsubscribe();
    this.updateFund$.unsubscribe();
  }
}
