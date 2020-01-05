import { Component, OnInit } from '@angular/core';

import { Retsept } from '../retsept.model';

@Component({
  selector: 'app-retseptid-nimekiri',
  templateUrl: './retseptid-nimekiri.component.html',
  styleUrls: ['./retseptid-nimekiri.component.css']
})
export class RetseptidNimekiriComponent implements OnInit {
  retseptid: Retsept[] = [
    new Retsept('Testiretsept', 'See on kõigest test', 'https://www.pritikin.com/wp/wp-content/uploads/2013/11/food-is-killing-us.jpg'),
    new Retsept('Testiretsept', 'See on kõigest test', 'https://www.computerhope.com/jargon/c/cookie.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
