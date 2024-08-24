import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrls: ['./calc-actions.component.css']
})
export class CalcActionsComponent {
  @Input() valorUno: number | null = null;
  @Input() valorDos: number | null = null;
  @Output() resultadoEvent = new EventEmitter<number>();
  @Output() borrarEvent = new EventEmitter<void>();
  //de mas
  @Output() aleatorioEvent = new EventEmitter<{valorUno: number, valorDos: number}>();

  sumar(): void {
    if (this.valorUno !== null && this.valorDos !== null) {
      this.resultadoEvent.emit(this.valorUno + this.valorDos);
    }
  }

  restar(): void {
    if (this.valorUno !== null && this.valorDos !== null) {
      this.resultadoEvent.emit(this.valorUno - this.valorDos);
    }
  }

  multiplicar(): void {
    if (this.valorUno !== null && this.valorDos !== null) {
      this.resultadoEvent.emit(this.valorUno * this.valorDos);
    }
  }

  dividir(): void {
    if (this.valorUno !== null && this.valorDos !== null) {
      this.resultadoEvent.emit(this.valorUno / this.valorDos);
    }
  }

  potenciar(): void {
    if (this.valorUno !== null && this.valorDos !== null) {
      this.resultadoEvent.emit(Math.pow(this.valorUno, this.valorDos));
    }
  }

  raiz(): void {
    if (this.valorUno !== null && this.valorDos !== null) {
      this.resultadoEvent.emit(Math.pow(this.valorUno, 1 / this.valorDos));
    }
  }

  borrar(): void {
    this.borrarEvent.emit();
  }

  //no solicitado

  generarAleatorios(): void {
    const aleatorio1 = Math.floor(Math.random() * 500);
    const aleatorio2 = Math.floor(Math.random() * 100);
    this.aleatorioEvent.emit({ valorUno: aleatorio1, valorDos: aleatorio2 });
  }

}
