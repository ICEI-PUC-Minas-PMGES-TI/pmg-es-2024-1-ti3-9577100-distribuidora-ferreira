import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from 'src/app/material-module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    ContentComponent,
    MenuBarComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class ContentModule { }
