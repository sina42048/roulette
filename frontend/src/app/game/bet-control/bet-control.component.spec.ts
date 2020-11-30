import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetControlComponent } from './bet-control.component';

describe('BetControlComponent', () => {
  let component: BetControlComponent;
  let fixture: ComponentFixture<BetControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
