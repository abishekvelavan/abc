import { Component } from '@angular/core';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css',
})
export class AchievementComponent {
  image = 'assets/images/img2.png';
  imagePath1 = 'assets/images/icon1.png';
  imagePath2 = 'assets/images/icon2.png';
  imagePath3 = 'assets/images/icon3.png';
  imagePath4 = 'assets/images/icon4.png';

  logo1 = 'assets/images/mindtickle.png';
  logo2 = 'assets/images/locus.png';
  logo3 = 'assets/images/tels.png';
}
