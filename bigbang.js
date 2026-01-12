"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Empty array to put number
var arrayNumber = [];
// Push number into the array arrayNumber
for (var i = 1; i <= 100; i++) {
    arrayNumber.push(i);
}
// Display the current array arrayNumber to verify
console.log(arrayNumber);
var bigBang = function (array) {
    //create new array for the bigbang output
    var bigbangArray = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var bigbangNum = array_1[_i];
        if (bigbangNum % 3 === 0 && bigbangNum % 5 === 0) {
            // Replace any number divisible by 3 and 5 with the word "BIGBANG"
            bigbangArray.push("BIGBANG");
        }
        else if (bigbangNum % 3 === 0) {
            // Replace any number divisible by 3 with the word "BIG"
            bigbangArray.push("BIG");
        }
        else if (bigbangNum % 5 === 0) {
            // Replace any number divisible by 5 with the word "BANG"
            bigbangArray.push("BANG");
        }
        else {
            bigbangArray.push(bigbangNum.toString());
        }
    }
    return bigbangArray;
};
var resultBigBang = bigBang(arrayNumber);
// Display the bigBang result
console.log(resultBigBang);
// Name of the output file 
var outputFilePath = "output.json";
// Write result to output.json
fs.writeFile(outputFilePath, JSON.stringify(resultBigBang), 'utf8', 
// Error handling
function (err) {
    if (err) {
        console.error("Error writing output on the file: ", err);
    }
    else {
        console.log("Output is display on the ".concat(outputFilePath, " as JSON"));
    }
});
