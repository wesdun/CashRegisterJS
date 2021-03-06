/**
 * Created by w_dun on 2/2/2016.
 */
var assert = require('assert');
var drawer = require('../src/CashRegister.js');

it('should have a drawer method', function(){
    //assert.equal(typeof cr, 'object');
    assert.equal(typeof drawer, 'function');
});

it('should return Closed when price same as cash', function() {

    assert.equal(drawer(0, 0, []), "Closed");
});

it('should return Insufficient Funds when cid is less than change', function(){
    assert.equal(drawer(1, 2, []), "Insufficient Funds");
});

it('should return correct change array with one denomination',function(){
    assert.deepEqual(drawer(0.01,0.03, [['PENNY',0.05]]), [['PENNY', 0.02]]);
} );

it('should return correct change array with two denominations', function(){
    assert.deepEqual(drawer(0.02, 0.10, [['PENNY', 0.10], ['NICKEL', 0.15]]), [['NICKEL', 0.05], ['PENNY', 0.03]]);
});

it('should return correct change array with many denominations', function(){
    assert.deepEqual(drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]),
        [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]])
});

it('should return Insufficient Funds when exact change not available', function(){
    assert.equal(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), "Insufficient Funds");
});

it('should return closed', function(){
    assert.equal(drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), "Closed");
});

it('should return Need more money, if not enough cash is given', function(){
    assert.equal(drawer(10, 8, [["ONE", 8]]), "Need more money.");
});