import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvalTecAovivoPage } from './aval-tec-aovivo.page';

describe('AvalTecAovivoPage', () => {
  let component: AvalTecAovivoPage;
  let fixture: ComponentFixture<AvalTecAovivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalTecAovivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
