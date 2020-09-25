"use strict";
exports.__esModule = true;
exports.convert = exports.comma = void 0;
function comma(number, thecomma) {
    if (number === void 0) { number = 0; }
    if (thecomma === void 0) { thecomma = ','; }
    if (number === 0)
        throw '❌ Error: Pass something.';
    try {
        if (typeof number !== 'number') {
            throw '❌ Error: Only numbers required.';
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thecomma);
    }
    catch (err) {
        console.error(err);
    }
}
exports.comma = comma;
function convert(value, captilaze) {
    if (captilaze === void 0) { captilaze = 'CAPITAL'; }
    var captilazeText = 1;
    if (captilaze.toLocaleUpperCase() === 'CAPITAL')
        captilazeText = 1;
    if (captilaze.toLocaleUpperCase() === 'SMALL')
        captilazeText = 2;
    var m = 'M';
    var k = 'K';
    if (captilazeText === 2)
        m = 'm', k = 'k';
    if (value >= 1000000) {
        value = (value / 1000000) + m;
    }
    else if (value >= 1000) {
        value = (value / 1000) + k;
    }
    return value;
}
exports.convert = convert;
