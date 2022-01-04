//JS code executes synchroonusly, timers alows us to delay the execution.
//setTimeout() and setInterval()

/* setTImeOut: this function sets a countdown for an execution of a
callback function,which calls the function when the timer is
completed. */
//setTimeout ( expression, timeout );

function sayHi() {
    console.log('Hi there after 2 sec');
  }
  
  setTimeout(sayHi, 2000);
  console.log("hello")
  

  function sayHiWithMessage(message) {
    console.log('Hi there after 2 sec'+ ":::: "+message);
  }
  
  setTimeout(sayHiWithMessage, 2000, 'how r you');
  console.log("hello with message")


/* setInterval: it repeatedly calls a function or executes a code snippet,
with a fixed time delay between each call. */


function sayHiWithTimeInterval() {
    console.log('Hi there we are in setInterval');
  }
  
  setInterval(sayHiWithTimeInterval, 2000);
  console.log("hello with setInterval")

  
