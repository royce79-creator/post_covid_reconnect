// //This will prompt a greeting depdning on waht time 
// of day it is. 
function userGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good evening Adventurer'; 
    }  else if (hourNow > 12) {
        greeting = 'Good afternoon Adventurer';
    }  else if (hourNow > 0) {
        greeting = 'Good Morning Adventurer';  
    }  else {
        greeting = 'Welcome Adventurer';
    }
    return'<h3>' + greeting + '</h3>'; }

function personHere () {
    console.log (personHere)
    var person = prompt("what is your name?");

    return '<h3>' + person + "!" + '</h3>'; }

function ask() {
    var answer=prompt("Do you like the city or nature?");
    if (answer=="nature") {
        alert("We have some great hiking spots to show you!");
        return; 
}   if (answer=="city"){
        alert("We have some great spots in the Seattle greater area to show you!");
        return; 
}   if (answer== "") {
    alert("Have to choose one please!")
    ask();
}
}

