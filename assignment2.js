let marks=200
if (marks>=0  && marks<=30) {
    console.log("failed")
}
else if (marks>=31 && marks<=50){
    console.log("below average")
}
else if(marks>=51 && marks<=70) {
    console.log("above average")
}
else if (marks>=71 && marks<=100){
    console.log("excellent")
}
else{
    // console.log("invalid marks")  
}


let distance=100
if (distance>=0 && distance<=100) {
    console.log("Pay 5 USD")
}
else if (distance>=101 && distance<=500){
    console.log("Pay 10 USD")
}
else if (distance>=501 && distance<=1000) {
    console.log("Pay 20 USD")
}
else if (distance>=1001) {
    console.log("Pay 40 USD")
}
else {
    console.log("invalid distance")
}