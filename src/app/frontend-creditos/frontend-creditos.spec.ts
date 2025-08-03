import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendCreditos } from './frontend-creditos';

describe('FrontendCreditos', () => {
  let component: FrontendCreditos;
  let fixture: ComponentFixture<FrontendCreditos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendCreditos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendCreditos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
