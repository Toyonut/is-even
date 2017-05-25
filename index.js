/*!
 * is-even <https://github.com/jonschlinkert/is-even>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function isEven(i) {
    if (typeof(i) === 'string') {
      i = parseInt(i);      
    }
    if (typeof(i) !== 'number' || isNaN(i)) {
        throw new TypeError('is-even expects a number.');
    } 
    return i % 2 === 0;
};