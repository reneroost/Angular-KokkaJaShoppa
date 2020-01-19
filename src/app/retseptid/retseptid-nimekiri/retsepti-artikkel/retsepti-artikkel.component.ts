import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Retsept } from '../../retsept.model';

@Component({
  selector: 'app-retsepti-artikkel',
  templateUrl: './retsepti-artikkel.component.html',
  styleUrls: ['./retsepti-artikkel.component.css']
})
export class RetseptiArtikkelComponent implements OnInit {
  @Input() retseptiArtikkel: Retsept;
  @Output() retseptiEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onValiArtikkel(retseptiArtikkel: Retsept) {
    this.retseptiEmitter.emit();
  }

}
