function validateIntegerNumber(value){
    if(value != 0 && !value){
        return false;
    }
    value = parseFloat(value);
    if(isNaN(value)){
        return false;
    }else if(!Number.isInteger(value)){
        return false;
    } else {
        return true;
    }
};

function isPrimeNumber(num){
    if(!validateIntegerNumber(num)){
        return undefined;
    }
    var countDivisors = 2;
    for(var i = 2; i < num; i++){
        if(Number.isInteger(num/i)){
            countDivisors++;
        }
    }
    if(countDivisors == 2){
        return true;
    }else{
        return false;
    }
}

function getNextPrimeNumberFromInt(num){
    if(!validateIntegerNumber(num)){
        return undefined;
    }
    var nextPrimeNumber = null;
    while(!nextPrimeNumber){
        num++;
        if(isPrimeNumber(num)){
            nextPrimeNumber = num;
        }
    }
    return nextPrimeNumber;
};

export { validateIntegerNumber, isPrimeNumber, getNextPrimeNumberFromInt };