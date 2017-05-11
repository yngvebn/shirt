import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<estimate class="estimate"></estimate>`
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