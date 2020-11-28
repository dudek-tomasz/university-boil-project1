import {Component, Input, OnInit} from '@angular/core';
import {Wynik} from "../../wynik";
import {Dane} from "../../dane";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: Wynik = {
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

  @Input() oldData: Dane = {
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

  constructor() {
  }

  ngOnInit() {
  }

  refresh(): void {
    window.location.reload();
  }
}
