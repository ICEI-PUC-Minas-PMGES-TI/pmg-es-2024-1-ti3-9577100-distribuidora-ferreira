import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProdutoComponent } from './table-produto.component';

describe('TableProdutoComponent', () => {
  let component: TableProdutoComponent;
  let fixture: ComponentFixture<TableProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableProdutoComponent]
    });
    fixture = TestBed.createComponent(TableProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
