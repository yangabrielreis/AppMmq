import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvalTecnicasPage } from './aval-tecnicas.page';

describe('AvalTecnicasPage', () => {
  let component: AvalTecnicasPage;
  let fixture: ComponentFixture<AvalTecnicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalTecnicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
