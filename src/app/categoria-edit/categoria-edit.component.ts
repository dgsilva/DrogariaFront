import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { CatergoriaService } from '../services/catergoria-service.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {
  categoria:Categoria;

  constructor(private service:CatergoriaService, private router:Router, private route:ActivatedRoute) { 
    this.categoria = new Categoria();
  }

  ngOnInit(): void {
    this.getAll();
  }


  editar():void{
    this.service.update(this.categoria).subscribe(object =>{
      this.categoria = object
      this.router.navigate(['/categoria-table'])
      console.log('Alterado com sucesso')
    })
  }

  getAll():void {
    const codigo = this.route.snapshot.paramMap.get('codigo') || ''
    this.service.retrieveById(codigo).subscribe(object => {
      this.categoria = object;
    });
  }
}
