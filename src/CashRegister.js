function drawer (price, cashGiven, cashInDrawer) {
    const DENOMINATION = 0;
    const AMOUNT = 1;

    var change = [];
    var changeNeeded;
    var denominationValues = {};

    denominationValues['PENNY'] = 0.01;
    denominationValues['NICKEL'] = 0.05;
    denominationValues['DIME'] = 0.10;
    denominationValues['QUARTER'] = 0.25;
    denominationValues['ONE'] = 1.00;
    denominationValues['FIVE'] = 5.00;
    denominationValues['TEN'] = 10.00;
    denominationValues['TWENTY'] = 20.00;
    denominationValues['ONE HUNDRED'] = 100.00;

    if(cashGiven < price){
            return "Need more money.";
        } else {
            changeNeeded = decimal(cashGiven - price);
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
                    change.push([denomination, denominationCount*denominationValue]);
                }
           }
    }

    if (decimal(changeNeeded) > 0) {
        return "Insufficient Funds";
    } else if (decimal(sumOfDrawer(cashInDrawer)) == 0) {
        return "Closed";
    }
      else {
        return change;
    }
}

function hasDenomination(denominationInDrawer){
    return denominationInDrawer[1] > 0;
}

function needsDenomination(changeNeeded, denominationValue){
    return decimal(changeNeeded) >= denominationValue;
}

function decimal(num){
    return parseFloat(num.toFixed(2));
}

function sumOfDrawer (cashInDrawer) {
    var sum = 0;
    for (var i = 0; i < cashInDrawer.length; i++){
        sum += cashInDrawer[i][1];
    }
    return sum;
}

module.exports = drawer;