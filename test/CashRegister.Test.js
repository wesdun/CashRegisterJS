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

