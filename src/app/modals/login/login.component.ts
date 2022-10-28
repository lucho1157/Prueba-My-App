import { Component, OnInit } from '@angular/core';
import { ServicioDeEdicionService } from 'src/app/servicio-de-edicion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarDatos!: boolean;

  constructor(private servicioEdicion: ServicioDeEdicionService) { }

  ngOnInit(): void {
    this.mostrarDatos=false
  }

  onShowHide(){
    this.mostrarDatos=true;
    this.servicioEdicion.disparadorDeEdicion.emit({
      data:this.mostrarDatos=true
    })
  }

}
