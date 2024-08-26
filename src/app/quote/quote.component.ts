import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
})
export class QuoteComponent {
  showContent(contentId: string, event: Event) {
    const contents = document.querySelectorAll('.testimonial-content');
    contents.forEach((content) =>
      content.setAttribute('style', 'display: none;')
    );

    const activeContent = document.getElementById(contentId);
    if (activeContent) {
      activeContent.setAttribute('style', 'display: block;');
    }

    const indicators = document.querySelectorAll('.round');
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    (event.target as HTMLElement).classList.add('active');
  }
}
