function drawer (price, cash, cid) {
    var change = [];
    var changeNeeded;
    var denominations = {};
    denominations['PENNY'] = 0.01;
    denominations['NICKEL'] = 0.05;

    if (cash == price) {
        return "Closed";
    } else if (cash > price) {
        changeNeeded = parseFloat((cash - price).toFixed(2));
        if (sumOfDrawer(cid) < changeNeeded){
            return "Insufficient Funds";
        } else {
            for(var i = cid.length-1; i >= 0; i--){
                if(changeNeeded <= cid[i][1]){
                    change.push([cid[i][0], changeNeeded]);
                    changeNeeded -= cid[i][1];
                } else {

                }
            }
            return change;
        }
    } else {
        return "Need more money.";
    }

    return change;
}

function sumOfDrawer (cid) {
    var sum = 0;
    for (var i = 0; i < cid.length; i++){
        sum += cid[i][1];
    }
    return sum;
}


module.exports = drawer;