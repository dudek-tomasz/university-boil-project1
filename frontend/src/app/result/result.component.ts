import {Component, Input, OnInit} from '@angular/core';
import {Wynik} from "../../wynik";
import {Dane} from "../../dane";
import {Wynik2} from "../../wynik2";
import {Dane2} from "../../dane2";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: Wynik2 = {
    cost: 0,
    in: [{}],
    out: [{}],
    arrows: [{}]
  };

  @Input() oldData: Dane2 = {
    nodes: [{}],
    arrows: [{}]
  };

  constructor() {
  }

  ngOnInit() {
  }

  refresh(): void {
    window.location.reload();
  }
}
