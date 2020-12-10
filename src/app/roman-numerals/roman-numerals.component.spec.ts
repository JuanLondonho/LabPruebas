import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumeralsComponent } from './roman-numerals.component';

describe('RomanNumeralsComponent', () => {
  let component: RomanNumeralsComponent;
  let fixture: ComponentFixture<RomanNumeralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanNumeralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumeralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('includes_.', () => {
    expect(component.numberValidation(0.23)).toEqual('El numero debe ser entero (no puede incluir puntos)');
  });

  it('lower_than_0', () => {
    expect(component.numberValidation(-23)).toEqual('El numero debe ser mayor o igual a 1');
  });

  it('bigger_than_1000', () => {
    expect(component.numberValidation(1053)).toEqual('El numero debe ser menor o igual a 1000');
  });

  it('bigger_than_1000', () => {
    expect(component.numberValidation(1053)).toEqual('El numero debe ser menor o igual a 1000');
  });
});
