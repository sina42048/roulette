import { Component, OnInit } from '@angular/core';
import { BetService } from '../bet.service';

@Component({
  selector: 'app-bet-control',
  templateUrl: './bet-control.component.html',
  styleUrls: ['./bet-control.component.css']
})
export class BetControlComponent implements OnInit {
  amount: number;

  constructor(private betService: BetService) { }

  ngOnInit(): void {
  }

  increaseBetAmount(amount: number) {
    this.amount != null ? this.amount = this.amount + amount : this.amount = amount;
    this.onBetAmountChange();
  }

  onBetAmountChange() {
    this.betService.changeBetAmount(this.amount);
  }

  resetBetAmount() {
    this.amount = 0;
    this.onBetAmountChange();
  }
}
