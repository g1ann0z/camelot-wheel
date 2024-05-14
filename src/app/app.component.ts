import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userKey: string = '';
  userScale: string = '';
  userTone: string = '';
  currentSelections = '';

  camelotWheel = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  camelotWheelMinor = ["Cm", "Cm#", "Dm", "Dm#", "Em", "Fm", "Fm#", "Gm", "Gm#", "Am", "Am#", "Bm"];
  tunrArray: string[] = [];
  tunrArrayMinor: string[] = [];

  noteMaior: any ='';
  noteMinor: any ='';

  resultA: string ='';
  resultB: string ='';
  resultC: string ='';

  constructor() {
    this.initializeArrays();
  }

  initializeArrays() {
    this.tunrArray = this.camelotWheel.slice();
    this.tunrArrayMinor = this.camelotWheelMinor.slice();
  }

  inputKey(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue.length > 1) {
      (event.target as HTMLInputElement).value = inputValue.charAt(0).toUpperCase();
      this.userKey = inputValue.charAt(0).toUpperCase();
    } else {
      this.userKey = inputValue.toUpperCase();
    }
    /* console.log(this.userKey); */
  }

  scale(value: string) {
    if (value === "minor") {
      this.userScale += 'm';
    } else {
      this.userScale = '';
    }
    /* console.log(this.userKey + this.userScale); */
  }

  tone(value: string) {
    if (value === "sharp") {
      this.userTone = '';
      this.userTone += '#';
    } else if (value === "flat") {
      this.userTone = '';
      this.userTone += 'b';
    } else {
      this.userTone = '';
    }
    /* console.log(this.userKey + this.userScale + this.userTone); */
  }

  search() {
    this.currentSelections = this.userKey + this.userScale + this.userTone;
    console.log("Current Selections:", this.currentSelections);

    console.log(this.currentSelections);
    // Qui puoi eseguire altre azioni come avviare una ricerca o inviare le selezioni al backend
    this.camelot(this.currentSelections);
  }

  
  

  camelot(data: string) {

    if (data === "Db") {
        data = "C#";
    } else if (data === "Eb") {
        data = "D#";
    } else if (data === "Gb") {
        data = "F#";
    } else if (data === "Ab") {
        data = "G#";
    } else if (data === "Bb") {
        data = "A#";
    } else if (data === "Dmb") {
        data = "Cm#";
    } else if (data === "Emb") {
        data = "Dm#";
    } else if (data === "Gmb") {
        data = "Fm#";
    } else if (data === "Amb") {
        data = "Gm#";
    } else if (data === "Bmb") {
        data = "Am#";
    }

    if(this.camelotWheel.includes(data)){  
        this.initializeArrays(); /* inizializza array */
        while (this.tunrArray[0] !== data) {
            this.noteMaior = this.tunrArray.shift();
            this.tunrArray.push(this.noteMaior);
        }
        this.resultA = this.tunrArray[5];
        this.resultB = this.tunrArray[7];
        this.resultC = this.tunrArray[9] + "m";

        /* console.log(this.tunrArray[5], "<=" + this.tunrArray[0] + "=>", this.tunrArray[7], this.tunrArray[9] + "m"); */
    } else if (this.camelotWheelMinor.includes(data)) {
        this.initializeArrays(); /* inizializza array */
        while (this.tunrArrayMinor[0] !== data) {
            this.noteMinor = this.tunrArrayMinor.shift();
            this.tunrArrayMinor.push(this.noteMinor);
            this.noteMaior = this.tunrArray.shift();
            this.tunrArray.push(this.noteMaior);
        }
        this.resultA = this.tunrArray[5] + "m";
        this.resultB = this.tunrArray[7] + "m";
        this.resultC = this.tunrArray[3];

        console.log(this.tunrArray[5] + "m", "<=" + this.tunrArray[0]+ "m" + "=>", this.tunrArray[7] + "m", this.tunrArray[3]);
    }

}

}
