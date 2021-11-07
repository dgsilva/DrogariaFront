import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { CatergoriaService } from '../services/catergoria-service.service';

@Component({
  selector: 'app-categoria-deletar',
  templateUrl: './categoria-deletar.component.html',
  styleUrls: ['./categoria-deletar.component.css']
})
export class CategoriaDeletarComponent implements OnInit {

  categoria:Categoria;
  constructor(private service:CatergoriaService, private router:Router, private route:ActivatedRoute) { 
    this.categoria = new Categoria();

  }

  ngOnInit(): void {
    this.getAll();
  }


  delete():void{
    this.service.deleteById(this.categoria.codigo).subscribe(curso=>{
      console.log("Registro excluido com sucesso")
      this.router.navigate(['/categoria-table'])
      
    })
    
  }

  getAll():void {
    const codigo = this.route.snapshot.paramMap.get('codigo') || ''
    this.service.retrieveById(codigo).subscribe(object => {
      this.categoria = object
    });
  }

}
