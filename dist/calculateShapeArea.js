"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    else
        return 0;
}
console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));
