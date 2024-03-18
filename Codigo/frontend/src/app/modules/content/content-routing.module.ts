import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { ProdutosComponent } from '../produtos/produtos.component';

const routes: Routes = [
  { path: "", component: ContentComponent, children: [
    {path: "produtos", loadChildren: () => import('../produtos/produtos.module').then(module => module.ProdutosModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }