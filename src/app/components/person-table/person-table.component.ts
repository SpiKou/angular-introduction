import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: "Spiros",
    surName: "Koutelopoulos",
    age: 38,
    email: "spiros.koutelopoulos@gmail.com"
  };
}
