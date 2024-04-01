import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Spiros';

  person = {
    giveName: "Spiros",
    surName: "Koutelopoulos",
    age: 38,
    email: "spiros.koutelopoulos@gmail.com"
  };
}
