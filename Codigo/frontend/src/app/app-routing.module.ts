import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './modules/content/content.component';
import { ProdutosComponent } from './modules/produtos/produtos.component';

const routes: Routes = [
  { path: "content", loadChildren: () => import('../app/modules/content/content.module').then(module => module.ContentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
