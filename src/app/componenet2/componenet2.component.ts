import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenet2',
  templateUrl: './componenet2.component.html',
  styleUrls: ['./componenet2.component.css']
})
export class Componenet2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
