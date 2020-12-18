import { animate, trigger, style, transition, state, query, stagger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketService } from 'src/app/socket.service';
import { BetService } from '../bet.service';
import { Bet } from '../models/bet';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css'],
  animations: [
    trigger('list', [
      state('in', style({})),
      transition('* => void', [
        style({ height: '!', opacity: 1 }),
        animate(200, style({ height: 0, opacity: 0 }))
      ]),
      transition('void => *', [
        style({ height: 0, opacity: 0 }),
        animate(400, style({ height: '*', opacity: 1 }))
      ])
    ]),
    trigger('winnerState', [
      state('winner', style({ color: 'green' })),
      state('loser', style({ color: 'red' })),
    ])
  ]
})
export class BetComponent implements OnInit, OnDestroy {
  @Input() betColor;
  @Input() betText: string;
  buttonColor: string;
  imageColor: string;
  bets = [];
  totalBetAmount = 0;
  winnerStatus = 'normal';
  retriveAllBets$: Subscription;
  newBetAdded$: Subscription;
  winner$: Subscription;
  restart$: Subscription;


  constructor(private socketService: SocketService,
              private betService: BetService) { }
  
  ngOnInit(): void {
    this.retriveAllBets$ = this
      .betService
      .retriveAllBets$
      .pipe(map((bets: Bet[]) => {
        const colorFiltered = bets.filter((bet: Bet) => bet.color == this.betColor);
        return colorFiltered;
      }))
      .subscribe((bets: Bet[]) => {
        this.bets = bets;
        const totalBetAmount = bets.reduce((acc, cur) => acc + cur.amount ,0);
        this.totalBetAmount = totalBetAmount;
      });

    this.newBetAdded$ = this.betService.newBetAdded$.subscribe((bet: Bet) => {
      if (bet.color == this.betColor) {
        this.bets.push(bet);
        this.totalBetAmount += bet.amount
      }
      this.bets.sort((a: Bet, b: Bet) => {
        return a.amount < b.amount ? 1 : a.amount > b.amount ? -1 : 0;
      });
    });

    this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor: string) => {
      if (winnerColor == this.betColor) {
        this.winnerStatus = 'winner';
        this.bets.forEach((bet: Bet) => {
          if (bet.color == winnerColor) {
            if (winnerColor == 'red' || winnerColor == 'black') {
              return bet.amount *= 2;
            }
            return bet.amount *= 14;
          }
        });
        const totalBetAmount = this.bets.reduce((acc, cur) => acc + cur.amount ,0);
        this.totalBetAmount = totalBetAmount;
      } else {
        this.winnerStatus = 'loser';
      }
    });

    this.restart$ = this.socketService.fromEvent('restart').subscribe(() => {
      this.bets = [];
      this.winnerStatus = 'normal';
      this.totalBetAmount = 0;
    });

    if (this.betColor == 'red') {
      this.buttonColor = '-webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6))';
      this.imageColor = '';
    } else if (this.betColor == 'green') {
      this.buttonColor = '-webkit-linear-gradient(rgb(17, 124, 3), rgb(26, 102, 7))';
      this.imageColor = 'hue-rotate(175deg)';
    } else {
      this.buttonColor = '-webkit-linear-gradient(rgb(57, 58, 57), rgb(29, 29, 29))';
      this.imageColor = 'grayscale(100%)';
    }
  }

  addNewBet() {
    this.betService.newBet(this.betColor);
  }

  ngOnDestroy() {
    this.retriveAllBets$.unsubscribe();
    this.newBetAdded$.unsubscribe();
    this.winner$.unsubscribe();
    this.restart$.unsubscribe();
  }

}
