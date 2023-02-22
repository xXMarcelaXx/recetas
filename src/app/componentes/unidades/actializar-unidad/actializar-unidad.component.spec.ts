import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActializarUnidadComponent } from './actializar-unidad.component';

describe('ActializarUnidadComponent', () => {
  let component: ActializarUnidadComponent;
  let fixture: ComponentFixture<ActializarUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActializarUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActializarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
