function drawer (price, cash, cid) {
    var change;
    var changeTotal;

    if (cash == price) {
        return "Closed";
    } else if (cash > price) {
        changeTotal = cash - price;
        if (sumOfDrawer(cid) < changeTotal){
            return "Insufficient Funds";
        } else {
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