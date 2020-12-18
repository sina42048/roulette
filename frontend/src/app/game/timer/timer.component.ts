import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  timer = 'Connecting...';
  testWidth = 100;
  rollTimer$: Subscription;
  restartRoll$: Subscription;
  winner$: Subscription;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.rollTimer$ = this.socketService.fromEvent('timer').subscribe((timer: number) => {
      if (timer === 0) {
        this.testWidth = 100;
        this.timer = 'Rolling ...'
      } else {
        this.testWidth = 100 - (timer * 6.6);
        this.timer = timer.toString() + ' Sec';
      }
    });

    this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor: string) => {
      if (winnerColor == 'red') {
        this.timer = 'WINNER : RED';
      } else if (winnerColor == 'green') {
        this.timer = 'WINNER : GREEN';
      } else {
        this.timer = 'WINNER : BLACK';
      }
    });

    this.restartRoll$ = this.socketService.fromEvent('restart').subscribe(() => {
      this.timer = 'Restarting Game...';
    });
  }

  ngOnDestroy() {
    this.rollTimer$.unsubscribe();
    this.restartRoll$.unsubscribe();
    this.winner$.unsubscribe();
  }
}
