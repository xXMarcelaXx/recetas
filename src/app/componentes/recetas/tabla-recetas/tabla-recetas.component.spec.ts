import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRecetasComponent } from './tabla-recetas.component';

describe('TablaRecetasComponent', () => {
  let component: TablaRecetasComponent;
  let fixture: ComponentFixture<TablaRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRecetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
