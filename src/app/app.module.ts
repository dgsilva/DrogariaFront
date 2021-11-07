import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaTableComponent } from './categoria-table/categoria-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoTableComponent } from './produto-table/produto-table.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoDeletarComponent } from './produto-deletar/produto-deletar.component';
import { CategoriaDeletarComponent } from './categoria-deletar/categoria-deletar.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CatergoriaService } from './services/catergoria-service.service';
import { ProdutosService } from './services/produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaCreateComponent,
    CategoriaTableComponent,
    NavComponent,
    ProdutoComponent,
    ProdutoTableComponent,
    ProdutoEditComponent,
    ProdutoDeletarComponent,
    CategoriaDeletarComponent,
    CategoriaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CatergoriaService,ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
