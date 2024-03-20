import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterOutlet
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  title: string = 'Projet de cours Angular G4-B2';
  isClicked: boolean = false;
  frameworks: string[] = [
    'Symfony',
    'SpringBoot',
    'Angular',
    'Flutter',
  ];

  getToto(): string {
    return 'C\'est cliqué !';
  }

  changeTitle(): void {
    this.title = 'Titre de cours mis à jour !';
  }
}
