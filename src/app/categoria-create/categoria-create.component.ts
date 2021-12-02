import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { CatergoriaService } from '../services/catergoria-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
categoria:Categoria;

//atributos
mensagem_sucesso: string = "";
mensagem_erro: string = "";

  constructor(private service:CatergoriaService, private router:Router) { 
    this.categoria = new Categoria();
  }

  formCadastro = new FormGroup({
    categoria: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(150)
    ])
  })

  //função utilizada para exibir as mensagens de erro de validação na página
  get form(): any {
    return this.formCadastro.controls;
  }

  ngOnInit(): void {
  }

  save():void{
    this.service.createCategoria(this.categoria).subscribe(
      (object:any) =>{
      this.categoria = object;
      //exibir a mensagem de sucesso na página
      this.mensagem_sucesso = object.mensagem
      this.mensagem_sucesso = "Cadastro realizado com sucesso"
      //limpar os campos do formulário
      ;this.formCadastro.reset();
    },
    (e:any) =>{
      this.mensagem_erro = e.mensagem
      this.mensagem_erro = "Erro ao salvar a categoria";
    }
    )
  }
}
