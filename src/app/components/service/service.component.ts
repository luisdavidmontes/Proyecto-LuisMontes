import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public servicios = [
    {nombre: 'Ventas', description: ''},
    {nombre: 'Accesorios', description: ''},
    {nombre: 'Software', description: ''},
    {nombre: 'Planes', description: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
