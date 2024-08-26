import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashCardsComponent } from './cash-cards.component';

describe('CashCardsComponent', () => {
  let component: CashCardsComponent;
  let fixture: ComponentFixture<CashCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CashCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
