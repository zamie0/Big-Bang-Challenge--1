import * as fs from "fs";

// Empty array to put number
let arrayNumber: number[] = [];

// Push number into the array arrayNumber
for ( let i = 1; i <= 100; i++) {
    arrayNumber.push(i)
}

// Display the current array arrayNumber to verify
console.log(arrayNumber);

const bigBang = (array: number[]): string[] => {
    
    //create new array for the bigbang output
    let bigbangArray: string[] = [];

    for ( let bigbangNum of array ) {
        if ( bigbangNum % 3 === 0 && bigbangNum % 5 === 0 ) {
            // Replace any number divisible by 3 and 5 with the word "BIGBANG"
            bigbangArray.push("BIGBANG");

        } else if ( bigbangNum % 3 === 0 ) {    
            // Replace any number divisible by 3 with the word "BIG"
            bigbangArray.push("BIG");

        } else if ( bigbangNum % 5 === 0 ) {
            // Replace any number divisible by 5 with the word "BANG"
            bigbangArray.push("BANG");

        } else {
            bigbangArray.push(bigbangNum.toString());
        }
    }
    return bigbangArray;
}

let resultBigBang: string[] = bigBang(arrayNumber);

// Display the bigBang result
console.log(resultBigBang);

// Name of the output file 
const outputFilePath: string = "output.json";

// Write result to output.json
fs.writeFile(outputFilePath, JSON.stringify(resultBigBang), 'utf8', 
    // Error handling
    (err) => {
        if (err) {
            console.error("Error writing output on the file: ", err);
        } else {
            console.log(`Output is display on the ${outputFilePath} as JSON`);
        }
});


