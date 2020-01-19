import { Component, OnInit, Input } from '@angular/core';
import { Retsept } from '../retsept.model';

@Component({
  selector: 'app-retsepti-detail',
  templateUrl: './retsepti-detail.component.html',
  styleUrls: ['./retsepti-detail.component.css']
})
export class RetseptiDetailComponent implements OnInit {
  @Input() valitudRetsept: Retsept;

  constructor() { }

  ngOnInit() {
  }

}
