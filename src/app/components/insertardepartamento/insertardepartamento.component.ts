import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css'],
})
export class InsertardepartamentoComponent {
  @ViewChild('cajaid') cajaIdRef!: ElementRef;
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajalocalidad') cajaLocalidadRef!: ElementRef;

  constructor(
    private _serviceDepartamentos: ServiceDepartamentos,
    private _router: Router
  ) {}

  insertarDepartamento():void{
    var num = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var loc = this.cajaLocalidadRef.nativeElement.value;

    var nuevoDepa= new Departamento(num,nom,loc);
    this._serviceDepartamentos.create(nuevoDepa).subscribe(response => {
      this._router.navigate(["/"]);
    })
  }
}
