import { Component } from '@angular/core';
import { AchievementComponent } from '../achievement/achievement.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AchievementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  logo = 'assets/images/growfins.png';
  imagePath = 'assets/images/img1.png';
}
