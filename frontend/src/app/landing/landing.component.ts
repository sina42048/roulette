import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('startGameState', [
      state('start', style({
        transform: 'rotate(0deg) scale(1)',
      })),
      state('end', style({
        transform: 'rotate(8deg) scale(1.5)',
      })),
      transition('start => end', [
        animate('500ms 0.2ms linear')
      ]),
      transition('end => start' , [
        animate('500ms 0.2ms linear')
      ])
    ])
  ]
})
export class LandingComponent implements OnInit, OnDestroy {
  buttonState: string;
  gameButtonInterval$: Subscription;
  audio: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
    this.buttonState = 'start';
    this.gameButtonInterval$ = interval(1000).subscribe(() => {
      this.buttonState == 'start' ? this.buttonState = 'end' : this.buttonState = 'start';
    });
  }

  playSound(): void {
    this.audio = new Audio();
    this.audio.src = '../../../assets/sound.ogg';
    this.audio.load();
    this.audio.play();
  }

  ngOnDestroy(): void {
    this.gameButtonInterval$.unsubscribe();
  }

}
