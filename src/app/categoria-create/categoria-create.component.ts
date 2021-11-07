import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { CatergoriaService } from '../services/catergoria-service.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
categoria:Categoria;

  constructor(private service:CatergoriaService, private router:Router) { 
    this.categoria = new Categoria();
  }

  ngOnInit(): void {
  }

  save():void{
    this.service.createCategoria(this.categoria).subscribe(object =>{
      this.categoria = object
      this.router.navigate(['/categoria-table'])
      console.log('Cadastrado com sucesso')
    })
  }
}
