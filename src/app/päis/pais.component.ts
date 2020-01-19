import { Component, EventEmitter, Output } from '@angular/core';

@Component( {
    selector: 'app-pais',
    templateUrl: './pais.component.html'
})
export class PaisComponent {
    @Output() sektsioonValitud = new EventEmitter<string>();
        
    onValiSektsioon(sektsioon: string) {
        this.sektsioonValitud.emit(sektsioon);
    }

}