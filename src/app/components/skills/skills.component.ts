import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills = ['CONFIABLES', 'RESPALDO A NUESTROS PRODUCTOS', 'GARANTIA EN NUESTROS SERVICIOS ', 'Inteligente']  
  constructor() { }

  ngOnInit(): void {
  }

}
