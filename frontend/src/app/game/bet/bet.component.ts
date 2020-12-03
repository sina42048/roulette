import { animate, trigger, style, transition, state } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
      transition(':enter', [
        style({ transform: 'translateY(-20px)' }), animate('300ms', style({ transform: 'translateY(0)' }))]
      ),
      transition(':leave',
        [style({ opacity: 1, transform: 'translateY(0px)' }), animate('300ms', style({ opacity: 0, transform: 'translateY(20px)' }))]
      )
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
        let colorFiltered : Bet[];
        colorFiltered = bets.filter((bet: Bet) => bet.color == this.betColor);
        return colorFiltered;
      }))
      .subscribe((bets: Bet[]) => {
        this.bets = bets;
      });

    this.newBetAdded$ = this.betService.newBetAdded$.subscribe((bet: Bet) => {
      if (bet.color == this.betColor)
        this.bets.push(bet);
        this.bets.sort((a: Bet, b: Bet) => {
          if (a.amount < b.amount) {
            return 1;
          } else if (a.amount > b.amount) {
            return -1;
          } else {
            return 0;
          }
        });
    });

    this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor: string) => {
      if (winnerColor == this.betColor) {
        this.winnerStatus = 'winner';
      } else {
        this.winnerStatus = 'loser';
      }
    });

    this.restart$ = this.socketService.fromEvent('restart').subscribe(() => {
      this.bets = [];
      this.winnerStatus = 'normal';
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
    this.betService.newBet('Sina', this.betColor);
  }

  ngOnDestroy() {
    this.retriveAllBets$.unsubscribe();
    this.newBetAdded$.unsubscribe();
    this.winner$.unsubscribe();
    this.restart$.unsubscribe();
  }

}
