import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRollComponent } from './latest-roll.component';

describe('LatestRollComponent', () => {
  let component: LatestRollComponent;
  let fixture: ComponentFixture<LatestRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestRollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
