import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosClienteComponent } from './graficos-cliente.component';

describe('GraficosClienteComponent', () => {
  let component: GraficosClienteComponent;
  let fixture: ComponentFixture<GraficosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
