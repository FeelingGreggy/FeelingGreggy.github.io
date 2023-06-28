// This is a comment

// Sets the stop number 
let stops = 0;

// Sets the direction of the bus. False is forward, true is backwards.
let reverse = false;

// Stop the main loop from running forever
let limit = 0;

while (limit < 2){
    
    // Sets the loop control varibles for the two inner loops
    let innerLimit = 0;
    let innerLimit2 = 0;

    // Checks to see if you're going forward and if you are at a stop before 5.
    if(stops < 5 && reverse == false){
        reverse = true;
        while(innerLimit < 5){
            stops++;
            console.log("You're at stop " + stops);
            innerLimit++;
        }
    }
    
    // Checks to see if you're at stop 5 and if you're going backwards.
    else if(stops > 1 && reverse == true){
        reverse = false;
        while(innerLimit2 < 4){
            stops--;
            console.log("You're at stop " + stops);
            innerLimit2++;   
        }
    }
limit++;
} 

/*
function printBusStop() {
    let currentStop = 1;
    let isForward = true;
    let routeCount = 0;
  
    while (routeCount < 2) {
      console.log("Bus stop:", currentStop);
  
      if (currentStop === 5) {
        isForward = false; // Reached the end, change direction
      } else if (currentStop === 1) {
        isForward = true; // Reached the start, change direction
        routeCount++; // Increment the route count when it completes one round
      }
  
      if (isForward) {
        currentStop++;
      } else {
        currentStop--;
      }
    }
  }
  
  printBusStop();
  
  */




