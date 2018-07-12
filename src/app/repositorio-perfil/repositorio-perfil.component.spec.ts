import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioPerfilComponent } from './repositorio-perfil.component';

describe('RepositorioPerfilComponent', () => {
  let component: RepositorioPerfilComponent;
  let fixture: ComponentFixture<RepositorioPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
