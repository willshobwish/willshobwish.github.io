import { Component, OnInit } from '@angular/core';
import { dadoscontato } from 'src/app/constant/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass'],
})
export class ContatoComponent implements OnInit {
  constructor() {}
  dados = dadoscontato;
  ngOnInit(): void {}
}
