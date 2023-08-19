import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Тайтл

  title = 'burger-intensive';
  //Скролл кнопок

  scrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
