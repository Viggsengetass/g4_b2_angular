import { Component } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {
  count = 0;

  // Mapping des variables de couleur SCSS
  colors = {
    defaultBlue: '#006ad7',
    defaultYellow: '#e3e300',
    redCount: '#ff4444',
    redCountM: '#d00000',
    greenCount: '#61ff5c',
    greenCountP: '#06b000',
  };

  changeCount(increment: number) {
    this.count += increment;
  }

  get counterColor(): string {
    if (this.count > 20) {
      return this.colors.greenCountP;
    } else if (this.count > 0) {
      return this.colors.greenCount;
    } else if (this.count < -20) {
      return this.colors.redCountM;
    } else if (this.count < 0) {
      return this.colors.redCount;
    } else {
      return this.colors.defaultYellow;
    }
  }
// Ajouté dans exercises.component.ts
  diceRolls: number[] = [];
  launchDice() {
    this.diceRolls = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    console.log(this.diceRolls); // Ajoutez cette ligne pour le débogage
  }

}

