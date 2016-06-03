// Confirm that the player is ready to play
var hasConfirmed = confirm("Are you ready to play?");

if ( hasConfirmed ) {
    // If the player has confirmed, get the player's name.
    var myName = prompt("What is your name?");
    
    // check to see if name has more than 2 characters else give it a default name.
    if ( myName.length <= 2 ) { 
        myName = "Anon";
    } 
    
    // Say hello to the player.
    document.write("<p>Hello " + myName );
    document.write("<br>Your game is about to begin.<br> You have just arrived at a 4 way stop.</p>");
    
    // See if the player is the only one waiting. - set variable myAnswer1
    var myAnswer1 = prompt("Are you the only one waiting?");
    
    // see if answer is yes
    if ( myAnswer1 === "yes" ) {
        // if successful, proceed
        document.write("<p>Proceed safely through the intersection.</p>");
    } else {
        
        //See if the player is the first one here - set variable myAnswer2
        var myAnswer2 = prompt("Are you the first one here?");
        
        if (myAnswer2 === "yes" ) {
            // if successful, proceed
            document.write("<p>Proceed safely through the intersection</p>");
    
        } else {
            
            // See if the player is the furthest to the right
            var myAnswer3 = prompt("Are you to the furthest to the right?");
            
            if ( myAnswer3 === "yes" ) {
                // if successful, proceed
                document.write("<p>Proceed safely through the intersection</p>");
            } else {
                // Player cannot proceed. Will have to start over.
                document.write("<p>Sorry, you cannot proceed. You'll have to start over!</p>");   
            }
        }       
    }
} else {
    document.write("<p>Sorry that you can't play yet.</p>");
}