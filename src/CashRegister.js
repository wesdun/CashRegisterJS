function drawer (price, cashGiven, cashInDrawer) {
    const DENOMINATION = 0;
    const AMOUNT = 1;

    var change = [];
    var changeNeeded;
    var denominations = {};

    denominations['PENNY'] = 0.01;
    denominations['NICKEL'] = 0.05;
    denominations['DIME'] = 0.10;
    denominations['QUARTER'] = 0.25;
    denominations['ONE'] = 1.00;
    denominations['FIVE'] = 5.00;
    denominations['TEN'] = 10.00;
    denominations['TWENTY'] = 20.00;
    denominations['ONE HUNDRED'] = 100.00;

    if(cashGiven >= price){
        changeNeeded = decimal(cashGiven - price);
            for(var i = cashInDrawer.length-1; i >= 0; i--){
                var denomCount = 0;
                var denomValue = denominations[cashInDrawer[i][DENOMINATION]];
                while ((decimal(changeNeeded) >= denomValue) & (cashInDrawer[i][AMOUNT] > 0)){
                    denomCount += 1;
                    changeNeeded -= denomValue;
                    cashInDrawer[i][AMOUNT] -= denomValue;
                }
                if(denomCount > 0){
                    change.push([cashInDrawer[i][DENOMINATION], denomCount*denomValue]);
                }
           }
    } else {
        return "Need more money.";
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