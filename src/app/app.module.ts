import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './textComponent/text.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        TextComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
