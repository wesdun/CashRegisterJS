function drawer (price, cash, cid) {
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
    denominations['ONE HUNDRED'], 100.00;

    if (cash == price) {
        return "Closed";
    } else if (cash > price) {
        changeNeeded = decimal(cash - price);
        if (sumOfDrawer(cid) < changeNeeded){
            return "Insufficient Funds";
        } else {
            for(var i = cid.length-1; i >= 0; i--){
                var denomCount = 0;
                var denomValue = denominations[cid[i][0]];
                while (decimal(changeNeeded) >= denomValue){
                    denomCount += 1;
                    changeNeeded -= denomValue;
                }
                change.push([cid[i][0], denomCount*denomValue]);
            }
            return change;
        }
    } else {
        return "Need more money.";
    }

    return change;
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