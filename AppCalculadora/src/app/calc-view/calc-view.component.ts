import { Component } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrls: ['./calc-view.component.css'] 
})
export class CalcViewComponent {
  valor1: number | null = null;
  valor2: number | null = null;
  resultado: number | null = null;

  setNumero1(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valor1 = +target.value;
  }

  setNumero2(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valor2 = +target.value;
  }

  setResultado(resultado: number): void {
    this.resultado = resultado;
  }

  borrar(): void {
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = null;
  }

  //no solicitado

  setAleatorios(event: { valorUno: number, valorDos: number }): void {
    this.valor1 = event.valorUno;
    this.valor2 = event.valorDos;
  }
}
