import { Component, OnInit } from '@angular/core';
import { ServicioDeEdicionService } from '../servicio-de-edicion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  mostrarDatos!: boolean;
  

  constructor(private servicioEdicion: ServicioDeEdicionService) { }

  ngOnInit(): void {
    this.servicioEdicion.disparadorDeEdicion.subscribe( data => {
    this.mostrarDatos=true;
    })
  }

}
