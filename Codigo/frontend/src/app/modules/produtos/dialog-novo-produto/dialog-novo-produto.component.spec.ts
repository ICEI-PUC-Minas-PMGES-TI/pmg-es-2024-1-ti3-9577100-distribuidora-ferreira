import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoProdutoComponent } from './dialog-novo-produto.component';

describe('DialogNovoProdutoComponent', () => {
  let component: DialogNovoProdutoComponent;
  let fixture: ComponentFixture<DialogNovoProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNovoProdutoComponent]
    });
    fixture = TestBed.createComponent(DialogNovoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
