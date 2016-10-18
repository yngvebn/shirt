import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<main-menu class="main-menu"></main-menu>
            <estimate class="estimate"></estimate>`
})
export class AppComponent {
    greeting: string;
    constructor() {
        this.greeting = "Hello there!";
    }

    getGreeting(name: string): string {
        return `Hello ${name}!`;
    }
}