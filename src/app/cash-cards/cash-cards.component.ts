import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-cards',
  standalone: true,
  imports: [],
  templateUrl: './cash-cards.component.html',
  styleUrl: './cash-cards.component.css',
})
export class CashCardsComponent {
  card1 = 'assets/images/cardimg1.png';
  card2 = 'assets/images/cardimg2.png';
  card3 = 'assets/images/cardimg3.png';
  card4 = 'assets/images/cardimg4.png';
}
