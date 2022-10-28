import { outputAst } from '@angular/compiler';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeEdicionService {
  @Output() disparadorDeEdicion: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
