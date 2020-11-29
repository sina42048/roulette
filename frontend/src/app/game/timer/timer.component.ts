import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer = '0';
  testWidth = 100;
  rollTimer$: Subscription;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.rollTimer$ = this.socketService.fromEvent('timer').subscribe((data: number) => {
      if (data === 0) {
        this.testWidth = 100;
        this.timer = 'Rolling ...'
      } else {
        this.testWidth = 100 - (data * 10);
        this.timer = data.toString() + ' Sec';
      }
      
    });
  }

}
