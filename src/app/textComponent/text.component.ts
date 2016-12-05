import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'text',
    template:
    `<div>{{text}}</div>`,
    styles: [`
    
    `]
})
export class TextComponent implements OnInit {
    private text: string;

    constructor() {

    }

    ngOnInit() {
        this.text = 'Here is the text from the text component';
    }
}