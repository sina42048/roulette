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
  timerDiff$: Subscription;
  audio: HTMLAudioElement;
  rollStatus: string;
  timerDiff = 0;
  
  constructor(private animBuild: AnimationBuilder,
              private socketService: SocketService,
              private window: Window) {}

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = '../../../../assets/roll.mp3';
    this.audio.load();


    this.initialRoulettePosition = parseInt(getComputedStyle(this.roullete.nativeElement).backgroundPositionX.replace('px', ''));

    this.rollObservable$ = this.socketService.fromEvent('roll').subscribe((rolledNumber: number) => {
      this.audio.play();
      this.rouletteRoll(rolledNumber, -12000, 9000);
      this.rollStatus = 'rolling';
    });

    this.timerDiff$ = this.socketService.fromEvent('timerDiff').subscribe((timeDiff: number) => {
      this.timerDiff = 9000 + (timeDiff * 1000) > 0 ? 9000 + (timeDiff * 1000) : 0;
    });

    this.rollingObservable$ = this.socketService.fromEvent('rolling').subscribe((rolledNumber: number) => {
      this.audio.play();
      this.rouletteRoll(rolledNumber, -12000, this.timerDiff);
      this.rollStatus = 'rolling';
    });

    this.restartRollObservable$ = this.socketService.fromEvent('restart').subscribe(() => {
      this.updateRoulette(this.initialRoulettePosition, 2000);
      this.rollStatus = 'normal';
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

  rouletteRoll(rolledNumber: number, position: number, animTimer: number): void {
    const layout = [1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8];
    const rollIndex = layout.findIndex((number) => number === rolledNumber);
    if (rollIndex > 7) {
      this.currentPosition = position + this.initialRoulettePosition + ( rollIndex - 7 ) * -100 - this.randomNumber(-49, 49);
    } else {
      this.currentPosition = position + this.initialRoulettePosition + ( 7 + (rollIndex + 1) ) * -100 - this.randomNumber(-49, 49);
    }
    this.updateRoulette(this.currentPosition, animTimer)
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onResize($event: Event) {
    this.resizeHandler();
  }

  onOrientaionChange($event) {
    this.resizeHandler();
  }

  resizeHandler() {
    if (this.window.matchMedia('(min-width: 1200px)').matches) {
      if (this.rollStatus == 'normal') {
        this.updateRoulette(-175, 300);
      }
      this.initialRoulettePosition = -175;
    } else if (this.window.matchMedia('(max-width: 1200px)').matches
              && this.window.matchMedia('(min-width: 820px)').matches) {
      if (this.rollStatus == 'normal') {
        this.updateRoulette(-350, 300);
      }
      this.initialRoulettePosition = -350;
    } else if (this.window.matchMedia('(max-width: 820px)').matches
              && this.window.matchMedia('(min-width: 620px)').matches) {
      if (this.rollStatus == 'normal') {
        this.updateRoulette(-450, 300);
      }
      this.initialRoulettePosition = -450;
    } else if (this.window.matchMedia('(max-width: 620px)').matches
              && this.window.matchMedia('(min-width: 420px)').matches) {
      if (this.rollStatus == 'normal') {
        this.updateRoulette(-550, 300);  
      }
      this.initialRoulettePosition = -550;
    } else {
      if (this.rollStatus == 'normal') {
        this.updateRoulette(-625, 300);  
      }
      this.initialRoulettePosition = -625;
    }
  }

  ngOnDestroy(): void {
    this.rollingObservable$.unsubscribe();
    this.rollObservable$.unsubscribe();
    this.restartRollObservable$.unsubscribe();
    this.timerDiff$.unsubscribe();
  }

}
