import { Component, OnInit } from '@angular/core';
import { rotas } from '../rotas';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  RotasCorretas = rotas;

  ngOnInit(): void {
    this.RotasCorretas.pop();
    this.RotasCorretas.pop();
  }
}
