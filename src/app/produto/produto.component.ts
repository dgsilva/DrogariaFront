import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { Produto } from 'src/model/produto';
import { CatergoriaService } from '../services/catergoria-service.service';
import { ProdutosService } from '../services/produtos.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  //atributos
mensagem_sucesso: string = "";
mensagem_erro: string = "";

  
  produto : Produto;
  categorias : Array<Categoria>;

  constructor(private serviceProduto:ProdutosService, private servicecategoria : CatergoriaService, private router:Router) {
    this.produto = new Produto();
    
   }

   formCadastro = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150)
    ]),

    quantidade: new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(150)
    ]),

    preco: new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(150)
    ]),

    dataDeValidade: new FormControl('',[
      Validators.required
    ]),

   categoria: new FormControl('',[
      Validators.required
   ])

  })

    //função utilizada para exibir as mensagens de erro de validação na página
    get form(): any {
      return this.formCadastro.controls;
    }

  ngOnInit(): void {
    this.listar();
  }


  save():void{
    this.serviceProduto.createProduto(this.produto).subscribe((res :any)=>{
      this.produto = res;
      this.mensagem_sucesso = res.mensagem
      this.mensagem_sucesso = "Cadastro realizado com sucesso"
      this.formCadastro.reset();
      console.log("Cadastrado com sucesso");
    },
    (e: any)=>{
      this.mensagem_erro = e.mensagem;
      this.mensagem_erro = "Algo deu errado na hora de salvar"
      
    }
    
    );
  }

  public listar(){
    this.servicecategoria.findCategoria().subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    });
  }


}
