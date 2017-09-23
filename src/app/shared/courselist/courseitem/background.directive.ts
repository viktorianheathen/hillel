import { Directive, Input, ViewContainerRef, OnInit } from '@angular/core';

@Directive({ selector: '[background]' })


export class BackgroundDirective {

    @Input() background: string;

    constructor(private viewContainer: ViewContainerRef) { }

    ngOnInit()
    {
        <HTMLDivElement>this.viewContainer
        .element.nativeElement.setAttribute('style', `background: ${this.background}`);
    }
}