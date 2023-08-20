import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Тайтл

  title = 'burger-intensive';
  //Скролл кнопок

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({ behavior: 'smooth' });
    if (burger) {
      this.form.patchValue({
        order: burger.title + ' (' + burger.price + ' ' + this.currency + ')',
      });
    }
  }

  constructor(private fb: FormBuilder, private appService: AppService) {}

  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  confirmOrder() {
    if (this.form.valid) {
      this.appService.sendOrder(this.form.value).subscribe({
        next: (response: any) => {
          const modal = document.querySelector('.modal');
          if (modal) {
            modal.classList.remove('visually-hidden');
          }
          this.form.reset();
        },
        error: (response: any) => {
          alert(response.error.message);
        },
      });
    }
  }
  closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.add('visually-hidden');
    }
  }

  //Смена валюты
  currency = '$';

  changeCurrency() {
    let newCurrency = '$';
    let coefficient = 1;

    if (this.currency === '$') {
      newCurrency = '₽';
      coefficient = 80;
    } else if (this.currency === '₽') {
      newCurrency = 'Br';
      coefficient = 2;
    } else if (this.currency === 'Br') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(1);
    });
  }

  productsData: any;

  ngOnInit() {
    this.appService.getData().subscribe((data) => (this.productsData = data));
  }
}
