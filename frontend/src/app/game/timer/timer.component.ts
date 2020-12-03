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

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.rollTimer$ = this.socketService.fromEvent('timer').subscribe((data: number) => {
      if (data === 0) {
        this.testWidth = 100;
        this.timer = 'Rolling ...'
      } else {
        this.testWidth = 100 - (data * 6.6);
        this.timer = data.toString() + ' Sec';
      }
    });

    this.restartRoll$ = this.socketService.fromEvent('restart').subscribe(() => {
      this.timer = 'Restarting Game...';
    });
  }

  ngOnDestroy() {
    this.rollTimer$.unsubscribe();
    this.restartRoll$.unsubscribe();
  }


}
