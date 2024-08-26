import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  logo1 = 'assets/images/linked.png';
  logo2 = 'assets/images/zicon.png';
  logo3 = 'assets/images/insta.png';
  logo4 = 'assets/images/fb.png';
}
