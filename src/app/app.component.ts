import { Component } from '@angular/core';
import {CoursesComponent} from "./pages/courses/courses.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./common/header/header.component";
import {FooterComponent} from "./common/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoursesComponent, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
