import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  valorRange = 0;
  inputValor = '';
  res = '';

  onIonRange(ev:RangeCustomEvent){
    this.valorRange = parseInt(ev.detail.value.toString());
  };

  calcular(){
    this.res = (this.valorRange*parseInt(this.inputValor)).toString();
  }

}
