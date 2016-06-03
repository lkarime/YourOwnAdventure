// confirm user wants to play
var hasConfirmed = confirm("Are you ready to play?");

if ( hasConfirmed ) {
    // get user name
    var myName = prompt("What is your name?");
    
    // check to see if name has more than 2 characters else give it a default name.
    if ( myName.length <= 2 ) { 
        myName = "Anon";
    } 
    
    // Say hello
    document.write("<p>Hello " + myName );
    document.write("<br>Your game is about to begin.<br> You have just arrived at a 4 way stop.</p>");
    
    // check to see if you are the only one waiting
    var myAnswer1 = prompt("Are you the only one waiting?");
    
    // see if answer is yes
    if ( myAnswer1 === "yes" ) {
        // if successful, proceed
        document.write("<p>Proceed safely through the intersection.</p>");
    } else {
        var myAnswer2 = prompt("Are you the first one here?");
        
        if (myAnswer2 === "yes" ) {
            // if successful, proceed
            document.write("<p>Proceed safely through the intersection</p>");
    
        } else {
            
            var myAnswer3 = prompt("Are you to the furthest to the right?");
            
            if ( myAnswer3 === "yes" ) {
                // if successful, proceed
                document.write("<p>Proceed safely through the intersection</p>");
            } else {
                document.write("<p>Sorry, you'll have to start over!</p>");   
            }
        }       
    }
} else {
    document.write("<p>Sorry that you can't play yet</p>");
}