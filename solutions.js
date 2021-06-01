"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(value) {
    return value === true;
}

function isFalse(value) {
    return value === false;
}

function not(value) {
    return !value;
}

function addOne(value) {
    return parseFloat(value) + 1;
}

function isEven(value) {
    return parseFloat(value) % 2 === 0;
}

function isIdentical(value1, value2) {
    return typeof(value1) == typeof(value2);
}

function isEqual(value1, value2) {
    return value1 == value2;
}

function or(value1, value2) {
    return value1 || value2;
}

function and(value1, value2) {
    return value1 && value2;
}

function concat(value1, value2) {
    return value1.toString() + value2.toString();
}