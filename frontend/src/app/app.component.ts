import {Component} from '@angular/core';
import {Data} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Logistyka';
  dane: Data | undefined;

  popyt1 = '';
  popyt2 = '';
  podaz1 = '';
  liczba11 = '';
  liczba12 = '';
  podaz2 = '';
  liczba21 = '';
  liczba22 = '';
  podaz3 = '';
  liczba31 = '';
  liczba32 = '';

  calculate() {
    this.dane={
      popyt1: this.popyt1,
      popyt2: this.popyt2,
      podaz1: this.podaz1,
      liczba11: this.liczba11,
      liczba12: this.liczba12,
      podaz2: this.podaz2,
      liczba21: this.liczba21,
      liczba22: this.liczba22,
      podaz3: this.podaz3,
      liczba31: this.liczba31,
      liczba32: this.liczba32
    };

    console.log(JSON.stringify(this.dane));
  }
}
