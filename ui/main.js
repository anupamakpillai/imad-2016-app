var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //Make a request to counter end point URL
    
    //Capture the response and store it in a var
    
    
    //return the counter value
    counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
};

