import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AchievementComponent } from './achievement/achievement.component';
import { QuoteComponent } from './quote/quote.component';
import { CashCardsComponent } from './cash-cards/cash-cards.component';
import { ProcessDetailsComponent } from './process-details/process-details.component';
import { FeaturesComponent } from './features/features.component';
import { DisplayinfoComponent } from './displayinfo/displayinfo.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AchievementComponent,CashCardsComponent,ProcessDetailsComponent,QuoteComponent,FeaturesComponent,DisplayinfoComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'growfins';
}
