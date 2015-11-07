# point-inside-triangle

> Check if a point is inside a triangle

## Install

This module requires node >=4.0.0

```
npm install --save point-inside-triangle
```

## Usage

```js
let isInside = require('point-inside-triangle')(triangle, point);
```

## Example

```js
let isInside = require('point-inside-triangle')(    
    [
        [0, 0],// A
        [1, 0],// B
        [0, 1] // C
    ],
    [0.25, 0.25] //point
);

// isInside = true
```

```js
//partial application
let inTriangle = require('point-inside-triangle')(
    [
        [0, 0],// A
        [1, 0],// B
        [0, 1] // C
    ]
);

let isInsideA = inTriangle([0.25, 0.25]);
// isInsideA = true

let isInsideB = inTriangle([0.75, 0.75]);
// isInsideB = false    
```

## Attribution

Method by [totologic](http://totologic.blogspot.de/2014/01/accurate-point-in-triangle-test.html) extended with early exits.

Test cases by [xnor](http://codegolf.stackexchange.com/questions/32898/check-if-point-lies-inside-triangle).
