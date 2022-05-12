
var wordList = `zebra
zeros
zests
zesty
zilch
zings
zippy
zoned
zones
zooms`;



var arrayFromStr = wordList.split("\n");
console.log(arrayFromStr);

queryForm = document.getElementById("arrayPrinter");

for (var ii = 0; ii < arrayFromStr.length - 1; ii++) {
    if (ii % 10 == 0) {
        linebreak = document.createElement("br");
        queryForm.appendChild(linebreak);   
    }
    document.getElementById("arrayPrinter").innerHTML += '"' + arrayFromStr[ii] + '", ';
}

