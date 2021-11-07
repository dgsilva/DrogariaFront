import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaDeletarComponent } from './categoria-deletar/categoria-deletar.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategoriaTableComponent } from './categoria-table/categoria-table.component';
import { NavComponent } from './nav/nav.component';
import { ProdutoDeletarComponent } from './produto-deletar/produto-deletar.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoTableComponent } from './produto-table/produto-table.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  
  {path:'categoria-client', component: CategoriaCreateComponent},
  {path:'categoria-table', component: CategoriaTableComponent},
  {path:'categoriaedit/:codigo', component: CategoriaEditComponent},
  {path:'categoriadeletar/:codigo', component: CategoriaDeletarComponent},
  {path:'product-client', component: ProdutoComponent},
  {path:'product-table', component: ProdutoTableComponent},
  {path:'produtoedit/:codigo', component: ProdutoEditComponent},
  {path:'produtodeletar/:codigo', component: ProdutoDeletarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
