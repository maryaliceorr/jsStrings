// Challenge #1

var numOfSandwiches = 8;

console.log("numOfSandwiches",numOfSandwiches);


// Challenge #2

var name = "Mary Alice Orr";

var string = "Hello, " + name + " how are you doing today?";

console.log("string " + string);


// Challenge #3

var DNA = "GCAT"

var RNA = DNA.replace("T","U");

console.log("RNA", RNA);

// Challenge #4


// var animal = "AlliGATor";
var animal = "Goat";



if (animal.toLowerCase() === "goat") {
    console.log("wide");
} 
else if (animal.toLowerCase() === "alligator") {
    console.log("small");
}



//Challenge #5

// var yarn = "the better string made of wool";

// var domString = "<h4>" + yarn + "</h4>";

// var myDiv = document.getElementById("yarn-holder");st

// myDiv.innerHTML = domString;


//Challenge #6

var str = "IBMWLOVEmbcatsbmw";

var cats = str.replace(/[BMWbmw]/g,"");

var catString = "<h1>" + cats + "<h1>";

var catElement = document.getElementById("cat-holder");

catElement.innerHTML = catString;





