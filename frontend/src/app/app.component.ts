import {Component} from '@angular/core';
// import {Dane} from "../dane";
import {HttpClient} from "@angular/common/http";
// import {Wynik} from "../wynik";
import {Router} from "@angular/router";
import {Dane2} from "../dane2";
import {Wynik2} from "../wynik2";


class Node {
  constructor() {
    this.name = '';
    this.in = 0;
    this.out = 0;
  }
  public name: string;
  public in: number;
  public out: number;
}
class Arrow {
  constructor() {
    this.from = '';
    this.to = '';
    this.cost = 0;
    this.min = 0;
    this.max = 0;
  }
  public from: string;
  public to: string;
  public cost: number;
  public min: number;
  public max: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private router: Router) {
  }

  title = 'Logistyka';

  dane2: Dane2 ={
    nodes: [{}],
    arrows: [{}]
  };
  dataNodesArray: Array<Node> = [];
  dataArrowsArray: Array<Arrow> = [];

  nodes: any;
  arrows: any;


  obliczone = false;
  done = false;
  showWarning = false;

  wynik2: Wynik2 = {
    cost: 0,
    in: [{}],
    out: [{}],
    arrows: [{}]
  };
  name = '';
  in = '';
  out = '';

  isComplete(){
    //xDDDD
    if (this.nodes == []) return false;
    if (this.arrows == []) return false;
    return true;
    //xDDDD
  }
  addNode(){
    this.dataNodesArray.push(new Node());
    console.log(this.dataNodesArray);
  }
  deleteNode(){
    this.dataNodesArray.pop();
    console.log(this.dataNodesArray);
  }
  addArrow(){
    this.dataArrowsArray.push(new Arrow());
    console.log(this.dataArrowsArray);
  }
  deleteArrow(){
    this.dataArrowsArray.pop();
    console.log(this.dataArrowsArray);
  }

  calculate() {
    if (this.isComplete()) {
      this.showWarning = false;
      this.dane2 = {
        nodes: this.dataNodesArray,
        arrows: this.dataArrowsArray
      };
      this.obliczone = true;
      // @ts-ignore
      this.http.get('http://localhost:6969/api/logistic2?q=' + JSON.stringify(this.dane2)).subscribe((data: Wynik2) => {
        this.wynik2 = data;
        setTimeout(() => {
          this.done = true;
        }, 1300);
      });
      console.log('http://localhost:6969/api/logistic2?q=' + JSON.stringify(this.dane2));
      setTimeout(() => {
        console.log('wynik: ' + JSON.stringify(this.wynik2));
      }, 1000);
    } else {
      this.showWarning = true;
    }
  }
}
