import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiputadosComponent } from './diputados.component';

describe('DiputadosComponent', () => {
  let component: DiputadosComponent;
  let fixture: ComponentFixture<DiputadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiputadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
