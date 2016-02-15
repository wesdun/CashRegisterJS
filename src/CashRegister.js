function drawer (price, cashGiven, cashInDrawer) {
    const DENOMINATION = 0;
    const AMOUNT = 1;

    price = convertToCents(price);
    cashGiven = convertToCents(cashGiven);
    cashInDrawer = convertToCents(cashInDrawer);
    
    var change = [];
    var changeNeeded;
    var denominationValues = {};

    denominationValues['PENNY'] = 1;
    denominationValues['NICKEL'] = 5;
    denominationValues['DIME'] = 10;
    denominationValues['QUARTER'] = 25;
    denominationValues['ONE'] = 100;
    denominationValues['FIVE'] = 500;
    denominationValues['TEN'] = 1000;
    denominationValues['TWENTY'] = 2000;
    denominationValues['ONE HUNDRED'] = 10000;

    if(cashGiven < price){
        return "Need more money.";
    } else {
        changeNeeded = cashGiven - price;
        var denominationCount, denomination, denominationValue;
        for(var i = cashInDrawer.length-1; i >= 0; i--){
            denominationCount = 0;
            denomination = cashInDrawer[i][DENOMINATION];
            denominationValue = denominationValues[denomination];
            while (needsDenomination(changeNeeded, denominationValue) & hasDenomination(cashInDrawer[i])){
                denominationCount += 1;
                changeNeeded -= denominationValue;
                cashInDrawer[i][AMOUNT] -= denominationValue;
            }
            if(denominationCount > 0){
                change.push([denomination, denominationCount*denominationValue/100]);
            }
       }
    }

    if (changeNeeded > 0) {
        return "Insufficient Funds";
    } else if (sumOfDrawer(cashInDrawer) == 0) {
        return "Closed";
    } else {
        return change;
    }
}

function convertToCents(cash){
    if (typeof cash == 'number') {
        cash *= 100;
    } else if (typeof cash == 'object') {
        cash.forEach(function(denomination){
            denomination[1] *= 100;
        });
    }

    return cash;
}

function hasDenomination(denominationInDrawer){
    return denominationInDrawer[1] > 0;
}

function needsDenomination(changeNeeded, denominationValue){
    return changeNeeded >= denominationValue;
}

function sumOfDrawer (cashInDrawer) {
    var sum = 0;
    for (var i = 0; i < cashInDrawer.length; i++){
        sum += cashInDrawer[i][1];
    }
    return sum;
}

module.exports = drawer;