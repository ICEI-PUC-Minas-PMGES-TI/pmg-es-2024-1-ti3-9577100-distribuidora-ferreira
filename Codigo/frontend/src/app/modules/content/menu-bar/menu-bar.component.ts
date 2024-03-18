import { Component, HostListener, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { DrawerService } from 'src/app/service/drawer/drawer.service';
import { NotificationService } from 'src/app/service/notifications/notifications.service';
import { ProdutoService } from 'src/app/service/produtos/produtos.service';
import { ProdutoElement } from '../../produtos/produtos.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  isScrolled = false;
  produtoEstoqueBaixo: ProdutoElement[] = [];
  @ViewChild('toolbar', { static: true }) toolbar!: MatToolbar;


  constructor(private drawerService: DrawerService,
    private produtoService: ProdutoService,
    private notificationService: NotificationService) { }

  ngAfterViewInit(): void {
    const toolbarHeight = this.toolbar._elementRef.nativeElement.offsetHeight;

    const contentDiv = document.querySelector('.content') as HTMLElement;
    if (contentDiv) {
      contentDiv.style.height = `calc(100vh - ${toolbarHeight}px)`;
    }
  }



  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
      produtos => {
        this.produtoEstoqueBaixo = produtos.filter(produto => produto.quantidadeEstoque <= 10);
      }
    );

    this.notificationService.produtoCriado$.subscribe(() => {
      this.produtoService.getProdutos().subscribe(
        produtos => {
          this.produtoEstoqueBaixo = produtos.filter(produto => produto.quantidadeEstoque <= 10);
        }
      );
    }
    );

    this.notificationService.produtoDeletado$.subscribe(() => {
      this.produtoService.getProdutos().subscribe(
        produtos => {
          this.produtoEstoqueBaixo = produtos.filter(produto => produto.quantidadeEstoque <= 10);
        }
      );
    }
    );


  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
