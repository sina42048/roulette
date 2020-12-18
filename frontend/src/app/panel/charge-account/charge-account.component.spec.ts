import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeAccountComponent } from './charge-account.component';

describe('ChargeAccountComponent', () => {
  let component: ChargeAccountComponent;
  let fixture: ComponentFixture<ChargeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
