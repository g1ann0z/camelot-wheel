import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userKey: string ='';
  userScale: string ='';

  inputKey(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue.length > 1) {
      (event.target as HTMLInputElement).value = inputValue.charAt(0).toUpperCase();
      this.userKey = inputValue.charAt(0).toUpperCase();
    } else {
      this.userKey = inputValue.toUpperCase();
    }
    console.log(this.userKey);
  }

  scale(value: string) {
    if (value === "minor") {
      this.userScale += 'm';
    } else {
      this.userScale ='';
    }
    console.log(this.userKey + this.userScale);
  } 

  
}
