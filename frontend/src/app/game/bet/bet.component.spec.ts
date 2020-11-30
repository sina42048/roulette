import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetComponent } from './bet.component';

describe('BetComponent', () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
