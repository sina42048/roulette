import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from '../socket.service';
import { BetService } from './bet.service';
import { Bet } from './models/bet';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {

  constructor(private socketService: SocketService,
              private betService: BetService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.socketService.emit('enteredGame');
    this.socketService.fromEvent('allBets').subscribe((data: Bet[]) => {
      this.betService.retriveAllBets$.next(data);
    });
    
    this.socketService.fromEvent('newBetAddedToAllUser').subscribe((data: Bet) => {
      this.betService.newBetAdded$.next(data);
    })

    this.socketService.fromEvent('betSuccess').subscribe(() => {
      this.toastr.success('Your Bet successfully Submitted !', 'Bet Submitted !' , {
        positionClass: 'toast-bottom-right',
        easeTime: 1000
      });
    });

    this.socketService.fromEvent('betFailed').subscribe(() => {
      this.toastr.error('Bet cant be submitted when rolling !', 'Error !' , {
        positionClass: 'toast-bottom-right',
        easeTime: 1000
      });
    });
  }

}
