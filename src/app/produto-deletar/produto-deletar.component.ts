import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { Produto } from 'src/model/produto';
import { CatergoriaService } from '../services/catergoria-service.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto-deletar',
  templateUrl: './produto-deletar.component.html',
  styleUrls: ['./produto-deletar.component.css']
})
export class ProdutoDeletarComponent implements OnInit {
produto:Produto;
categorias : Array<Categoria>;
  constructor(private service:ProdutosService, private router:Router, 
    private route:ActivatedRoute, private servicecategoria:CatergoriaService) {
      this.produto=new Produto();
     }

     ngOnInit():void {
      this.buscarCategoria();
      this.getAll();
    }
  
    getAll():void {
      const codigo = this.route.snapshot.paramMap.get('codigo') || ''
      this.service.retrieveById(codigo).subscribe(object => {
        this.produto = object;
      });
    }
  
    buscarCategoria():void{
      this.servicecategoria.findCategoria().subscribe(data => {
        this.categorias = data;
      });
    }

    delete():void{
      this.service.deleteById(this.produto.codigo).subscribe(data=>{
        console.log("Registro excluido com sucesso")
        this.router.navigate(['/product-table'])
        
      })
  }

}
