"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.describe)('sum', () => {
    (0, globals_1.it)('adds 1+2 to equals to  3', () => {
        (0, globals_1.expect)((0, index_1.sum)(1, 2)).toBe(3);
    });
    (0, globals_1.it)('adds 3+4 is equals to 7', () => {
        (0, globals_1.expect)((0, index_1.sum)(3, 4)).toBe(7);
    });
});
(0, globals_1.describe)('multiply', () => {
    (0, globals_1.it)('multiply 5*2 equals to 10', () => {
        (0, globals_1.expect)((0, index_1.multiply)(5, 2)).toBe(10);
    });
    (0, globals_1.it)('multiply 5*5 equals to 25', () => {
        (0, globals_1.expect)((0, index_1.multiply)(5, 5)).toBe(25);
    });
});
