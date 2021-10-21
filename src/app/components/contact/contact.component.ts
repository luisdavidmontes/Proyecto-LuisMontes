import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public nombre = '';
  public email = '';
  public telefono = '';
  public direccion = '';

  constructor() { }

  ngOnInit(): void {
  }

  estoEsLoQueQuieroHacer(){
    console.log(
      this.nombre,
      this.email,
      this.telefono,
      this.direccion
    )
  }

}
