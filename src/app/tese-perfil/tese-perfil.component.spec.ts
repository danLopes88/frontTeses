import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesePerfilComponent } from './tese-perfil.component';

describe('TesePerfilComponent', () => {
  let component: TesePerfilComponent;
  let fixture: ComponentFixture<TesePerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesePerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
