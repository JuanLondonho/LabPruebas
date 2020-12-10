import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  convertToRoman(numero:number) {
    if((numero+'').indexOf('.') > -1){
      return "El numero deber ser entero y no puede incluir puntos"
    }else if(numero<=0){
      return "El numero debe ser mayor o igual a 1"
    }else if(numero>1000){
      return "El numero debe ser menor o igual a 1000"
    }
    var romanos = ["I", "V", "X", "L", "C", "D", "M"];
    var numeros = [1, 5, 10, 50, 100, 500, 1000];
    var resultado = [];
    for(let i = 6; i >= 0; i--){
        if(numero >= numeros[i]){
            var div = Math.floor(numero / numeros[i]);
            numero = numero - (numeros[i]*div);
            if(div<4){
                for(let j = div; j > 0; j--){
                    resultado.push(romanos[i]);
                }
            }else{
                var x = resultado.pop();
                var indice = (romanos.indexOf(x) +1) || (i +1);
                console.log(indice);
                resultado.push(romanos[i] + (romanos[indice] || "M"));
            }
        }else{
            resultado.push('');
        }
    }
    return resultado.join('');
   }
}
