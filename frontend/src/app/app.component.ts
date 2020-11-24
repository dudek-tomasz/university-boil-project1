import {Component} from '@angular/core';
import {Dane} from "../dane";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Wynik} from "../wynik";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }
  title = 'Logistyka';
  dane: Dane | undefined;

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

  wynik : Wynik | undefined;

  calculate() {
    this.dane={
        pop: {
          'o1':this.popyt1,
          'o2':this.popyt2
        },
        pod: {
          'd1':this.podaz1,
          'd2':this.podaz2,
          'd3':this.podaz3
        },
        cenazak: {
          'd1':this.cenazak1,
          'd2':this.cenazak2,
          'd3':this.cenazak3
        },
        cenasprz: {
          'o1':this.cenasprz1,
          'o2':this.cenasprz2
        },
        trans: {
          'd1|o1':this.liczba11,
          'd1|o2':this.liczba12,
          'd2|o1':this.liczba21,
          'd2|o2':this.liczba22,
          'd3|o1':this.liczba31,
          'd3|o2':this.liczba32
        }
    };
    this.obliczone = true;
    // @ts-ignore
    this.http.get('http://localhost:6969/api/logistic?').subscribe((data : Wynik)=>{
      this.wynik = data;
    });
    console.log('http://localhost:6969/api/logistic?q='+JSON.stringify(this.dane));
    console.log('wynik: '+this.wynik);
  }
}
