import { Component, OnInit } from '@angular/core';
import { ServicioDeEdicionService } from '../servicio-de-edicion.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  mostrarDatos!: boolean;

  constructor(private servicioEdicion: ServicioDeEdicionService) { }

  ngOnInit(): void {
    this.servicioEdicion.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
  }

}
