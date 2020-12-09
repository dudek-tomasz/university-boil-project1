// import {Component} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {Wynik} from "../../wynik";
// import {Router} from "@angular/router";
// import {Dane2} from "../../dane2";
// import {Wynik2} from "../../wynik2";
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   constructor(private http: HttpClient, private router: Router) {
//   }
//
//   title = 'Logistyka';
//
//   dane2: Dane2 ={
//     nodes: [{}],
//     arrows: [{}]
//   };
//   nNodes = 0;
//
//   node = {};
//   arrow = {};
//
//   nodes: any;
//   arrows: any;
//
//
//   obliczone2 = false;
//   done2 = false;
//   showWarning2 = false;
//
//   wynik2: Wynik2 = {
//     cost: 0,
//     in: [{}],
//     out: [{}],
//     arrows: [{}]
//   };
//   isComplete(){
//     //xDDDD
//     if (this.nodes == []) return false;
//     if (this.arrows == []) return false;
//     return true;
//     //xDDDD
//   }
//   addNode(){
//     this.nNodes+=1;
//   }
//
//   calculate() {
//     if (this.isComplete()) {
//       this.showWarning = false;
//       this.dane2 = {
//         nodes: this.nodes,
//         arrows: this.arrows
//       };
//       this.obliczone = true;
//       // @ts-ignore
//       this.http.get('http://localhost:6969/api/logistic?q=' + JSON.stringify(this.dane2)).subscribe((data: Wynik2) => {
//         this.wynik2 = data;
//         setTimeout(() => {
//           this.done = true;
//         }, 1300);
//       });
//       console.log('http://localhost:6969/api/logistic?q=' + JSON.stringify(this.dane2));
//       setTimeout(() => {
//         console.log('wynik: ' + JSON.stringify(this.wynik2));
//       }, 1000);
//     } else {
//       this.showWarning = true;
//     }
//   }
// }
