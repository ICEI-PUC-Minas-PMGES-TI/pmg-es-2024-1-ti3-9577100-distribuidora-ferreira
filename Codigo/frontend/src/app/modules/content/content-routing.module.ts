import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
  { path: "content", component: ContentComponent, children: [
    {path: "produtos", loadChildren: () => import('../produtos/produtos.module').then(module => module.ProdutosModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }