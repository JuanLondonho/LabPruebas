import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from '../services/roman-numerals.service';

@Component({
  selector: 'app-roman-numerals',
  templateUrl: './roman-numerals.component.html',
  styleUrls: ['./roman-numerals.component.css']
})
export class RomanNumeralsComponent implements OnInit {
  private service = new RomanNumeralsService;
  romanNumber : any;
  decimalNumber : any;
  validation : boolean;

  constructor() { 
  }

  ngOnInit(): void {
  }

  convertNumber(numero){
    document.getElementById('answer').innerHTML = this.numberValidation(numero);
    if(!this.validation){
      this.decimalNumber = numero;
      this.romanNumber = this.service.convertToRoman(numero);
      document.getElementById('answer').innerHTML = "El numero "+this.decimalNumber+" en romano es: "+ this.romanNumber;
    }
    document.getElementById('answer').style.visibility="visible";
      
  }

  numberValidation(numero){
    if((numero+'').indexOf('.') > -1){
      this.validation = true;
      return "El numero debe ser entero (no puede incluir puntos)"
    }else if(numero<=0){
      this.validation = true;
      return "El numero debe ser mayor o igual a 1"
    }else if(numero>1000){
      this.validation = true;
      return "El numero debe ser menor o igual a 1000"
    }else{
      this.validation = false;
      return '';
    }
  }



}
