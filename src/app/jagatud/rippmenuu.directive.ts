import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appRippmenuu]'
})
export class RippmenuuDirective {
    @HostBinding('class.open') onAvatud: boolean = false;

    @HostListener('click') avaMenuu() {
        this.onAvatud = !this.onAvatud;
    }
}