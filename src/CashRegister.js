function drawer (price, cash, cid) {
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

    if (cash == price) {
        return "Closed";
    } else if (cash > price) {
        changeNeeded = decimal(cash - price);
            for(var i = cid.length-1; i >= 0; i--){
                var denomCount = 0;
                var denomValue = denominations[cid[i][DENOMINATION]];
                while ((decimal(changeNeeded) >= denomValue) & (cid[i][AMOUNT] > 0)){
                    denomCount += 1;
                    changeNeeded -= denomValue;
                    cid[i][AMOUNT] -= denomValue;
                }
                if(denomCount > 0){
                    change.push([cid[i][DENOMINATION], denomCount*denomValue]);
                }
           }
    } else {
        return "Need more money.";
    }
    if (decimal(changeNeeded) > 0) {
        return "Insufficient Funds";
    } else {
        return change;
    }
}

function decimal(num){
    return parseFloat(num.toFixed(2));
}

function sumOfDrawer (cid) {
    var sum = 0;
    for (var i = 0; i < cid.length; i++){
        sum += cid[i][1];
    }
    return sum;
}

module.exports = drawer;