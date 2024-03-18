import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovaCategoriaComponent } from './dialog-nova-categoria.component';

describe('DialogNovaCategoriaComponent', () => {
  let component: DialogNovaCategoriaComponent;
  let fixture: ComponentFixture<DialogNovaCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNovaCategoriaComponent]
    });
    fixture = TestBed.createComponent(DialogNovaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
