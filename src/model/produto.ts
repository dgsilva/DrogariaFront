import { Categoria } from "./categoria";

export class Produto{
   public codigo:number;
   public nome:string;
   public quantidade:number;
   public preco:number;
   public dataDeValidade: Date;
   public categoria:Categoria = new Categoria(); 
     
}