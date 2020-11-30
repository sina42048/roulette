import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
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
              private socketService: SocketService) { }

  changeBetAmount($amount: number) {
    this.betAmount = $amount;
  }

  newBet(name: string, color: string) {
    if (this.betAmount > 0) {
      this.toastr.info('new Bet Request Sent !', 'new Bet !' , {
        positionClass: 'toast-bottom-right'
      });
      this.socketService.emit('newBet', {
        name: name,
        color: color,
        amount: this.betAmount
      });
    } else {
      this.toastr.warning('Please enter bet amount before submitting bet !', 'Enter Amount !' , {
        positionClass: 'toast-bottom-right'
      });
    }
  }
}
