import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConsultaCreditos } from './api-consulta-creditos';

describe('ApiConsultaCreditos', () => {
  let component: ApiConsultaCreditos;
  let fixture: ComponentFixture<ApiConsultaCreditos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiConsultaCreditos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiConsultaCreditos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
