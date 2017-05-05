import { Directive, HostListener, ViewChild, ElementRef, Renderer2, ContentChild, Input } from "@angular/core";

@Directive({
    selector: '[appMenuDropdown]'
})
export class MenuDropdownDirective {
    constructor(private renderer: Renderer2) {

    }
    @Input() menuCollapsed: ElementRef
    menuOpen = false;


    @HostListener('click', ['$event']) onDropdownClick(event: Event) {
        if (this.menuOpen) {
            this.renderer.removeClass(this.menuCollapsed, 'in');
            this.menuOpen = false;
        } else {
            this.renderer.addClass(this.menuCollapsed, 'in');
            this.menuOpen = true;
        }
    }
}