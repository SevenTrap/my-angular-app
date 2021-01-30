import { Component } from '@angular/core';
import { title } from '../assets/mock/heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = title;
}
