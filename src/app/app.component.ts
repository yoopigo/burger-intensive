import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  confirmOrder() {
    if (this.form.valid) {
      // Удаление класса с модального окна
      const modal = document.querySelector('.modal');
      if (modal) {
        modal.classList.remove('visually-hidden');
      }
      this.form.reset();
    }
  }
  closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.add('visually-hidden');
    }
  }

  productsData = [
    {
      image: 'Burger_1.png',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'Burger_2.png',
      title: 'BBQ с беконом и курицей',
      text: 'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
      price: 7,
      basePrice: 7,
      grams: 320,
    },
    {
      image: 'Burger_3.png',
      title: 'Дабл биф бургер',
      text: 'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица',
      price: 10,
      basePrice: 10,
      grams: 420,
    },
    {
      image: 'Burger_4.png',
      title: 'Баварский бургер',
      text: 'Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
      price: 7,
      basePrice: 7,
      grams: 220,
    },
    {
      image: 'Burger_5.png',
      title: 'Бекон чизбургер',
      text: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
      price: 8,
      basePrice: 8,
      grams: 220,
    },
    {
      image: 'Burger_6.png',
      title: 'Индиана бургер',
      text: 'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 8,
      basePrice: 8,
      grams: 320,
    },
    {
      image: 'Burger_7.png',
      title: 'Вегги бургер',
      text: 'Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг',
      price: 8,
      basePrice: 8,
      grams: 280,
    },
    {
      image: 'Burger_8.png',
      title: 'Плаксивый Джо',
      text: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень',
      price: 7,
      basePrice: 7,
      grams: 320,
    },
    {
      image: 'Burger_9.png',
      title: 'Двойной чиз бургер',
      text: 'Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 11,
      basePrice: 11,
      grams: 400,
    },
    {
      image: 'Burger_10.png',
      title: 'Фрешбургер',
      text: 'Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат',
      price: 9,
      basePrice: 9,
      grams: 320,
    },
    {
      image: 'Burger_11.png',
      title: 'Цуккини бургер',
      text: 'Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень',
      price: 8,
      basePrice: 8,
      grams: 320,
    },
    {
      image: 'Burger_12.png',
      title: 'Двойной бургер чеддар',
      text: 'Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп,зелень',
      price: 9,
      basePrice: 9,
      grams: 360,
    },
  ];
}
