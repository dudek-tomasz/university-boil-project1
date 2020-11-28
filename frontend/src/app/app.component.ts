import {Component} from '@angular/core';
import {Dane} from "../dane";
import {HttpClient} from "@angular/common/http";
import {Wynik} from "../wynik";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private router: Router) {
  }

  title = 'Logistyka';

  dane: Dane = {
    pop: {
      o1: 0,
      o2: 0
    },
    pod: {
      d1: 0,
      d2: 0,
      d3: 0
    },
    cenazak: {
      d1: 0,
      d2: 0,
      d3: 0
    },
    cenasprz: {
      o1: 0,
      o2: 0
    },
    trans: {
      d1_o1: 0,
      d1_o2: 0,
      d2_o1: 0,
      d2_o2: 0,
      d3_o1: 0,
      d3_o2: 0
    }
  };

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
  cenazak1 = '';
  cenazak2 = '';
  cenazak3 = '';
  cenasprz1 = '';
  cenasprz2 = '';

  obliczone = false;
  done = false;
  showWarning = false;

  wynik: Wynik = {
    income: 0,
    cost: 0,
    transport: 0,
    result: 0,
    trans: {
      d1_o1: 0,
      d1_o2: 0,
      d2_o1: 0,
      d2_o2: 0,
      d3_o1: 0,
      d3_o2: 0
    }
  };
  isComplete(){
    //xDDDD
    if (this.popyt1 == '') return false;
    if (this.popyt2 == '') return false;
    if (this.podaz1 == '') return false;
    if (this.liczba11 == '') return false;
    if (this.liczba12 == '') return false;
    if (this.podaz2 == '') return false;
    if (this.liczba21 == '') return false;
    if (this.liczba22 == '') return false;
    if (this.podaz3 =='') return false;
    if (this.liczba31 == '') return false;
    if (this.liczba32 == '') return false;
    if (this.cenazak1 == '') return false;
    if (this.cenazak2 == '') return false;
    if (this.cenazak3 == '') return false;
    if (this.cenasprz1 == '') return false;
    if (this.cenasprz2 == '') return false;
    return true;
    //xDDDD
  }

  calculate() {
    if (this.isComplete()) {
      this.showWarning = false;
      this.dane = {
        pop: {
          o1: this.popyt1,
          o2: this.popyt2
        },
        pod: {
          d1: this.podaz1,
          d2: this.podaz2,
          d3: this.podaz3
        },
        cenazak: {
          d1: this.cenazak1,
          d2: this.cenazak2,
          d3: this.cenazak3
        },
        cenasprz: {
          o1: this.cenasprz1,
          o2: this.cenasprz2
        },
        trans: {
          d1_o1: this.liczba11,
          d1_o2: this.liczba12,
          d2_o1: this.liczba21,
          d2_o2: this.liczba22,
          d3_o1: this.liczba31,
          d3_o2: this.liczba32
        }
      };
      this.obliczone = true;
      // @ts-ignore
      this.http.get('http://localhost:6969/api/logistic?q=' + JSON.stringify(this.dane)).subscribe((data: Wynik) => {
        this.wynik = data;
        setTimeout(() => {
          this.done = true;
        }, 1300);
      });
      console.log('http://localhost:6969/api/logistic?q=' + JSON.stringify(this.dane));
      setTimeout(() => {
        console.log('wynik: ' + JSON.stringify(this.wynik));
      }, 1000);
    } else {
      this.showWarning = true;
    }
  }
}
