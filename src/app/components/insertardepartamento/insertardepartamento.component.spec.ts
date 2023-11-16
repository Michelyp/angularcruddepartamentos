import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertardepartamentoComponent } from './insertardepartamento.component';

describe('InsertardepartamentoComponent', () => {
  let component: InsertardepartamentoComponent;
  let fixture: ComponentFixture<InsertardepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertardepartamentoComponent]
    });
    fixture = TestBed.createComponent(InsertardepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
