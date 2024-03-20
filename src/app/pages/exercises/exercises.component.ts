import { Component } from '@angular/core';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent {

  value: number = 0;

  increment(inc: number): void {
    this.value += inc;
  }

  getCssClass(): string {
    if (this.value === 0) return 'yellow';
    if (this.value <= -20) return 'red-20';
    if (this.value < 0) return 'red';
    if (this.value >= 20) return 'green-20';
    return 'green';
  }

}
