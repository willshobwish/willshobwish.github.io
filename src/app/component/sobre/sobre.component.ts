import { Component, OnInit } from '@angular/core';
import { sobreDados } from 'src/app/constant/sobre';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.sass'],
})
export class SobreComponent implements OnInit {
  constructor() {}
  dados = sobreDados;
  ngOnInit(): void {}
}
