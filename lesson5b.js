// arrow functions with parameters 
// example 1 
const greeting=(name)=>{
    console.log("hello", name );

}
// call the function 
greeting("josh")
greeting("mvp")
greeting("alekih")
greeting("john")





// example 2 
const mycounty=(county)=> {              
    console.log("my county is",county);
    
}
// call the function
mycounty ("Nairobi")
mycounty ("Kisumu")
mycounty ("Naivasha")
mycounty ("Eldoret")



// example 3 
const addition =(num1,num2)=>{
    let answer=num1+num2
    console.log("the sum is ", answer);
    
}
// call the output 
addition (50,40)



// example 4 
const subtraction =(num1,num2)=>{
    let answer=num1-num2
    console.log("the difference is ", answer);
    
}
// call the output 
subtraction (200,100)

// example 5 
const division =(num1,num2)=>{
    let answer=num1/num2
    console.log("the divident is ", answer);
    
}
// call the output 
division (80,40)



const trafficlights=(color)=>{
    if (color=="red") {
        console.log("stop");
        
    }
    else if (color=="amber") {
        console.log("Get ready");
        
    }
    else if (color=="green") {
        console.log("go!");
        
    }

    else {
        console.log("invalid colour stop!");
        
    }
}

// call the function 
trafficlights ("green")

