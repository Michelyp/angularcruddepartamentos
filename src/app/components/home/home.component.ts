import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public departamentos !: Array<Departamento>;
  constructor(private _servideDepartamentos: ServiceDepartamentos){
  }
  ngOnInit(): void {
    this._servideDepartamentos.getDepartamentos().subscribe(response =>{
      this.departamentos = response;
    })
  }
}
