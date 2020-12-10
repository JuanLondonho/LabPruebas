import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('convert_to_1', ()=> {
    expect(service.convertToRoman(1)).toEqual('I');
  });

  it('convert_to_3', ()=> {
    expect(service.convertToRoman(3)).toEqual('III');
  });

  it('convert_to_4', ()=> {
    expect(service.convertToRoman(4)).toEqual('IV');
  });

  it('convert_to_7', ()=> {
    expect(service.convertToRoman(7)).toEqual('VII');
  });

  it('convert_to_9', ()=> {
    expect(service.convertToRoman(9)).toEqual('IX');
  });

  it('convert_to_13', ()=> {
    expect(service.convertToRoman(13)).toEqual('XIII');
  });

  it('convert_to_14', ()=> {
    expect(service.convertToRoman(14)).toEqual('XIV');
  });

  it('convert_to_16', ()=> {
    expect(service.convertToRoman(16)).toEqual('XVI');
  });

  it('convert_to_19', ()=> {
    expect(service.convertToRoman(19)).toEqual('XIX');
  });

  it('convert_to_29', ()=> {
    expect(service.convertToRoman(29)).toEqual('XXIX');
  });

  it('convert_to_34', ()=> {
    expect(service.convertToRoman(34)).toEqual('XXXIV');
  });

  it('convert_to_39', ()=> {
    expect(service.convertToRoman(39)).toEqual('XXXIX');
  });

  it('convert_to_43', ()=> {
    expect(service.convertToRoman(43)).toEqual('XLIII');
  });

  it('convert_to_47', ()=> {
    expect(service.convertToRoman(47)).toEqual('XLVII');
  });

  it('convert_to_49', ()=> {
    expect(service.convertToRoman(49)).toEqual('XLIX');
  });

  it('convert_to_53', ()=> {
    expect(service.convertToRoman(53)).toEqual('LIII');
  });

  it('convert_to_59', ()=> {
    expect(service.convertToRoman(59)).toEqual('LIX');
  });

  it('convert_to_70', ()=> {
    expect(service.convertToRoman(70)).toEqual('LXX');
  });

  it('83', ()=> {
    expect(service.convertToRoman(83)).toEqual('LXXXIII');
  });

  it('convert_to_89', ()=> {
    expect(service.convertToRoman(89)).toEqual('LXXXIX');
  });

  it('convert_to_96', ()=> {
    expect(service.convertToRoman(96)).toEqual('XCVI');
  });

  it('convert_to_99', ()=> {
    expect(service.convertToRoman(99)).toEqual('XCIX');
  });

  it('convert_to_100', ()=> {
    expect(service.convertToRoman(100)).toEqual('C');
  });

  it('convert_to_176', ()=> {
    expect(service.convertToRoman(176)).toEqual('CLXXVI');
  });

  it('convert_to_214', ()=> {
    expect(service.convertToRoman(214)).toEqual('CCXIV');
  });

  it('convert_to_386', ()=> {
    expect(service.convertToRoman(386)).toEqual('CCCLXXXVI');
  });

  it('convert_to_589', ()=> {
    expect(service.convertToRoman(589)).toEqual('DLXXXIX');
  });

  it('convert_to_708', ()=> {
    expect(service.convertToRoman(708)).toEqual('DCCVIII');
  });

  it('convert_to_893', ()=> {
    expect(service.convertToRoman(893)).toEqual('DCCCXCIII');
  });

  it('convert_to_999', ()=> {
    expect(service.convertToRoman(999)).toEqual('CMXCIX');
  });

  it('convert_to_1000', ()=> {
    expect(service.convertToRoman(1000)).toEqual('M');
  });





});
