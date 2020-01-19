import { Component, OnInit } from '@angular/core';

import { Koostisosa } from '../jagatud/koostisosa.model';

@Component({
  selector: 'app-ostu-nimekiri',
  templateUrl: './ostu-nimekiri.component.html',
  styleUrls: ['./ostu-nimekiri.component.css']
})
export class OstuNimekiriComponent implements OnInit {
  koostisosad: Koostisosa[] = [
    new Koostisosa('Õunad', 5),
    new Koostisosa('Tomatid', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onKoostisosaLisatud(koostisosa: Koostisosa) {
    this.koostisosad.push(koostisosa);
  }

}
