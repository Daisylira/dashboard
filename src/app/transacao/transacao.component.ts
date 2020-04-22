import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.scss']
})
export class TransacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.extrato
  }


  extrato = [
    {tipo: "venda", mercadoria: "Fritadeira Elétrica", valor: 300.00},
    {tipo: "compra", mercadoria: "Umidificador de Ar", valor: 150.00},
    {tipo: "venda", mercadoria: "Caixa de Som Elétrica", valor: 400.00},
  ]

  saldo = 12000.00

}
