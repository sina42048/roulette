import { Component, OnDestroy, OnInit } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { interval, Subscription } from 'rxjs';
import { BetService } from 'src/app/game/bet.service';
import { UserBet } from 'src/app/game/models/bet';

@Component({
  selector: 'app-bet-history',
  templateUrl: './bet-history.component.html',
  styleUrls: ['./bet-history.component.css'],
})
export class BetHistoryComponent implements OnInit, OnDestroy {
  public configuration: Config;
  public columns: Columns[];
  public data = [];
  allBets$: Subscription;
  isLoading = true;

  constructor(private bet: BetService) { }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.paginationEnabled = false;

    this.columns = [
      { key: 'id', title: '#' },
      { key: 'color', title: 'Color' },
      { key: 'amount', title: 'Amount' },
      { key: 'status', title: 'Status' },
      { key: 'createdAt', title: 'Date' }
    ];

    this.allBets$ = this.bet.getAllBets().subscribe((userBets: UserBet[]) => {
      this.isLoading = false;
      const updatedBets = userBets.map((userBet) => {
        const updatedBet = {
          id: userBet.id,
          color: userBet.color,
          amount: userBet.amount,
          status: userBet.status,
          round: userBet.round,
          createdAt: new Date(userBet.createdAt).toLocaleString(),
          updatedAt: userBet.updatedAt,
        };
        return updatedBet;
      }).sort((a: UserBet, b: UserBet) => {
        return a.id > b.id ? 1 : a.id < b.id ? -1 : 0; 
      });
      this.data = updatedBets;
    });
  }

  ngOnDestroy() {
    this.allBets$.unsubscribe();
  }
}
