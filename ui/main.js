var button = document.getElementById('counter');

button.onclick = function() {
    /
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE ) {
            
            //if request is success
            if(request.status == 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
    };
    //Capture the response and store it in a var
    
    /Make a request to counter end point URL
    request.open('GET', 'http://anupamakpillai.imad.hasura-app.io/counter',true);
    request.send(null);
   

};

