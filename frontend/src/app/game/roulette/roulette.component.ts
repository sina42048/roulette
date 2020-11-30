import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {
  @ViewChild('roulette', { static: true })
  roullete : ElementRef;

  animationRoulette: AnimationPlayer;
  initialRoulettePosition: number;
  currentPosition: number;
  rollObservable$: Subscription;
  rollingObservable$: Subscription;
  restartRollObservable$: Subscription;
  audio: HTMLAudioElement;
  
  constructor(private animBuild: AnimationBuilder,
              private socketService: SocketService) {}

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = '../../../../assets/roll.mp3';
    this.audio.load();

    this.initialRoulettePosition = parseInt(getComputedStyle(this.roullete.nativeElement).backgroundPositionX.replace('px', ''));

    this.rollObservable$ = this.socketService.fromEvent('roll').subscribe((data: number) => {
      this.audio.play();
      this.rouletteRoll(data, -12000, 9000);
    });

    this.rollingObservable$ = this.socketService.fromEvent('rolling').subscribe((data: number) => {
      this.audio.play();
      this.rouletteRoll(data, -1500, 100);
    });

    this.restartRollObservable$ = this.socketService.fromEvent('restart').subscribe(() => {
      this.updateRoulette(this.initialRoulettePosition, 2000);
    });
  }

  updateRoulette(position: number, timer: number): void {
    const rouletteAnimation = this.animBuild.build([
      animate(`${timer}ms cubic-bezier(0.2, 0.1, 0.1, 1)`, style({
        backgroundPositionX: `${position}px`
      }))
    ]);
    this.animationRoulette = rouletteAnimation.create(this.roullete.nativeElement);
    this.animationRoulette.play();
  }

  rouletteRoll(data: number, position: number, animTimer: number): void {
    const layout = [1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8];
    const rollIndex = layout.findIndex((number) => number === data);
    if (rollIndex > 7) {
      this.currentPosition = position + this.initialRoulettePosition + ( rollIndex - 7 ) * -100 - this.randomNumber(-40, 40);
    } else {
      this.currentPosition = position + this.initialRoulettePosition + ( 7 + (rollIndex + 1) ) * -100 - this.randomNumber(-40, 40);
    }
    console.log(data, ' | ', rollIndex, ' | ', this.currentPosition);
    this.updateRoulette(this.currentPosition, animTimer)
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onResize($event: Event) {
    if ( ( $event.target as any ).innerWidth < 1200 ) {
      this.initialRoulettePosition = -350;
    } else {
      this.initialRoulettePosition = -175;
    }
  }

  ngOnDestroy(): void {
    this.rollingObservable$.unsubscribe();
    this.rollObservable$.unsubscribe();
  }

}
