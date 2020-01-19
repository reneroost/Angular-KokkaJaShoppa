import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kokka-ja-shoppa';
  laaditudSektsioon: string = 'retsept';

  onNavigeeri(sektsoon: string) {
    this.laaditudSektsioon = sektsoon;
  }
}
