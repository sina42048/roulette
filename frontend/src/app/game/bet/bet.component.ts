import { animate, trigger, style, transition } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
        style({ opacity: 0, transform: 'translateY(-20px)' }), animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))]
      ),
      transition(':leave',
        [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
      )
    ])
  ]
})
export class BetComponent implements OnInit {
  @Input() betColor;
  @Input() betText: string;
  buttonColor: string;
  imageColor: string;
  bets = [];

  constructor(private socketService: SocketService,
              private betService: BetService) { }
  
  ngOnInit(): void {
    this
      .betService
      .retriveAllBets$
      .pipe(map((data: Bet[]) => {
        let colorFiltered : Bet[];
        colorFiltered = data.filter((data) => data.color == this.betColor);
        return colorFiltered;
      }))
      .subscribe((data: Bet[]) => {
        this.bets = data;
      });

    this.betService.newBetAdded$.subscribe((data) => {
      if (data.color == this.betColor)
        this.bets.unshift(data);
    });

    this.socketService.fromEvent('restart').subscribe(() => {
      this.bets = [];
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

}
