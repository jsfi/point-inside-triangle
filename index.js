/*
 * point-inside-triangle
 * https://github.com/jsfi/point-inside-triangle
 *
 * Copyright (c) 2015 Martin Sachse
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(triangle, point) {
    /* assignment ~20% faster than multiple array access */
    let x1 = triangle[0][0];
    let x2 = triangle[1][0];
    let x3 = triangle[2][0];
    let y1 = triangle[0][1];
    let y2 = triangle[1][1];
    let y3 = triangle[2][1];
    let denominator = ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3));

    let check = function(point) {
        let x = point[0];
        let y = point[1];

        let a = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / denominator;
        if (a < 0 || a > 1) {
            return false;
        }

        let b = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / denominator;
        if (b < 0 || b > 1) {
            return false;
        }

        return (a + b) <= 1;
    }

    if (!point) {
        return check;
    } else {
        return check(point);
    }
}
