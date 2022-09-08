const { template } = require("@babel/core");

function writeCards(names, event) {
    var tempArray = [];
    var tempString = "";
    for(let i = 0; i<names.length; i++){
        
        tempString = "Thank you, " + names[i] + ", for the wonderful " + event + " gift!";
        
        tempArray.push(tempString);
    }
    return tempArray;
}
function countDown(starting) {

    while(starting >= 0){
        console.log(starting);
        starting--;
    }
}