import { Component, OnInit } from '@angular/core';
import { Retsept } from './retsept.model';

@Component({
  selector: 'app-retseptid',
  templateUrl: './retseptid.component.html',
  styleUrls: ['./retseptid.component.css']
})
export class RetseptidComponent implements OnInit {
  valitudRetsept: Retsept;

  constructor() { }

  ngOnInit() {
  }

}
