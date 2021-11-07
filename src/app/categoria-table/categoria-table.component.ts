import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/model/categoria';
import { CatergoriaService } from '../services/catergoria-service.service';

@Component({
  selector: 'app-categoria-table',
  templateUrl: './categoria-table.component.html',
  styleUrls: ['./categoria-table.component.css']
})
export class CategoriaTableComponent implements OnInit {
 
  categorias:Categoria[] = [];

  constructor(private service:CatergoriaService) { 
    
  }

  ngOnInit(): void {
   this.listar();
  }

  listar(){
    this.service.findCategoria().subscribe(dados =>{
      this.categorias = dados
      console.log(dados);
    })

  }

}
