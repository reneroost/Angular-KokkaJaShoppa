import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaisComponent } from './Päis/pais.component';
import { RetseptidComponent } from './retseptid/retseptid.component';
import { RetseptidNimekiriComponent } from './retseptid/retseptid-nimekiri/retseptid-nimekiri.component';
import { OstuNimekiriComponent } from './ostu-nimekiri/ostu-nimekiri.component';
import { OstuMuutmineComponent } from './ostu-nimekiri/ostu-muutmine/ostu-muutmine.component';
import { RetseptiDetailComponent } from './retseptid/retsepti-detail/retsepti-detail.component';
import { RetseptiArtikkelComponent } from './retseptid/retseptid-nimekiri/retsepti-artikkel/retsepti-artikkel.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    RetseptidComponent,
    RetseptidNimekiriComponent,
    OstuNimekiriComponent,
    OstuMuutmineComponent,
    RetseptiDetailComponent,
    RetseptiArtikkelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
