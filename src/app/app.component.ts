import { Component } from '@angular/core';
import {CoursesComponent} from "./pages/courses/courses.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
