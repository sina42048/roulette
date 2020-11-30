import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SocketService } from 'src/app/socket.service';

interface LatestRolls {
  rolledNumber: number;
  colorStyle: string;
}


@Component({
  selector: 'app-latest-roll',
  templateUrl: './latest-roll.component.html',
  styleUrls: ['./latest-roll.component.css'],
  animations: [
    trigger('list', [
      transition(':enter', [
        style({ transform: 'translateX(50px)' }), animate('300ms', style({  transform: 'translateX(0)' }))]
      ),
    ])
  ]
})
export class LatestRollComponent implements OnInit {
  rolls: Array<LatestRolls>;


  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.fromEvent('latestRolls')
    .pipe(
      map((rolls: Array<number>) => {
        const updatedRolls = [];
        rolls.forEach((roll) => {
          let colorStyle = '';
          if (roll === 0) {
            colorStyle = 'hue-rotate(175deg)';
          } else if (roll > 7) {
            colorStyle = 'grayscale(100%)';
          }
          updatedRolls.push({ rolledNumber: roll, colorStyle });
        })
        return updatedRolls;
      })
    )
    .subscribe((rolls: Array<LatestRolls>) => {
      this.rolls = rolls;
    });
  }

}
