import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Koostisosa } from 'src/app/jagatud/koostisosa.model';

@Component({
  selector: 'app-ostu-muutmine',
  templateUrl: './ostu-muutmine.component.html',
  styleUrls: ['./ostu-muutmine.component.css']
})
export class OstuMuutmineComponent implements OnInit {
  @ViewChild('nimeSisend', { static: false }) nimeSisendViide: ElementRef;
  @ViewChild('koguseSisend', { static: false }) koguseSisendViide: ElementRef;
  @Output() koostisosaLisatud = new EventEmitter<Koostisosa>();

  constructor() { }

  ngOnInit() {
  }

  onLisaArtikkel() {
    const koostisosaNimi = this.nimeSisendViide.nativeElement.value;
    const koostisosaKogus = this.koguseSisendViide.nativeElement.value;
    const uusKoostisosa = new Koostisosa(koostisosaNimi, koostisosaKogus);
    this.koostisosaLisatud.emit(uusKoostisosa);
  }

}
