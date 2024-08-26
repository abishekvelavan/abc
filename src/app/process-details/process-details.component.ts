import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-process-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-details.component.html',
  styleUrl: './process-details.component.css',
})
export class ProcessDetailsComponent {
  imag1 = 'assets/images/process.png';
  imag2 = 'assets/images/process2.png';
  imag3 = 'assets/images/process3.png';
  imag4 = 'assets/images/process4.png';
  imag5 = 'assets/images/process5.png';

  logo1 = 'assets/images/home.png';
  logo2 = 'assets/images/flag.png';
  logo3 = 'assets/images/setting.png';
  logo4 = 'assets/images/line.png';
  logo5 = 'assets/images/block.png';

  tabName: String = 'instant-capture';

  openTab(tabName: String) {
    this.tabName = tabName;
  }
}
