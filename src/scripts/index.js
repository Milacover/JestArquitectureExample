import * as mathFunctions from './mathFunctions.js';

const numberInput = document.getElementById("numberInput");

document.getElementById("doubleNumberBtn").addEventListener("click", doubleNumber);
document.getElementById("divideByTwoBtn").addEventListener("click", divideByTwo);
document.getElementById("multiplyByZeroBtn").addEventListener("click", multiplyByZero);
document.getElementById("squareBtn").addEventListener("click", square);
document.getElementById("firstNextPrimeBtn").addEventListener("click", firstNextPrime);

function validateNumberInputValue(value){
    if(mathFunctions.validateIntegerNumber(value)){
        return true;
    }else{
        alert("El valor ingresado no es correcto.");
        return false;
    }
};

function doubleNumber(){
    if(!validateNumberInputValue(numberInput.value)){
        return false;
    }else{
        numberInput.value = numberInput.value * 2;
    }
};

function divideByTwo(){
    if(!validateNumberInputValue(numberInput.value)){
        return false;
    }else{
        numberInput.value = Math.round(numberInput.value / 2);
    }
};

function multiplyByZero(){
    if(!validateNumberInputValue(numberInput.value)){
        return false;
    }else{
        numberInput.value = numberInput.value * 0;
    }
};

function square(){
    if(!validateNumberInputValue(numberInput.value)){
        return false;
    }else{
        numberInput.value = numberInput.value * numberInput.value;
    }
};

function firstNextPrime(){
    if(!validateNumberInputValue(numberInput.value)){
        return false;
    }else{
        numberInput.value = mathFunctions.getNextPrimeNumberFromInt(numberInput.value);
    }
};