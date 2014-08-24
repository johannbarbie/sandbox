/************************
    variables (global?)
*************************/
var commandCount = 0;
var bitBalance = 0; //in BITs, one-millionth of a 'bitcoin'


/******************
    SMS responses
********************/
var balanceMSG = 'balance is displayed here';
var helpMSG = 'Help instructions here. send = this. bal = this. pin = this.';
var sendMSG = 'How much do you want to send?';
var transMSG = 'Here are the transactions that you have done';
var unknownMSG = 'Unknown command, please try again';
var welcomeMSG = 'Welcome to 37coins. SMS bitcoin wallet. Send commands to this gateway number. Reply HELP for more info or www.37coins.com';

var kWelcomeMSG = '안녕하십니까!';

/**************************
    HTML and CSS Stuff
***************************/
$( document ).ready(function() {
// Initial test, set user to 'new'
window.onload = function() { 
    alert( 'Welcome to the 37coins SMS emulator' );
    $( '#commandCountFeed span' ).html( commandCount );
}; // ( Initial test )

// Click the 'Send' button
$( 'button' ).click(function() {
    parseCommand(); 
});// ( Send button )

// Hit 'enter' on form
$( '#textBox' ).keydown(function() {
    if( event.which == 13 ){
      parseCommand();
    };
});// ( Enter button )

});// ( document )

/************************
    Parsing of commands
 ************************/
// return different command depending on input
function parseCommand() {
    var inputValue = $( 'input' ).val();

    // if user is new
    if ( commandCount == 0 ) {
        welcomeCMD( inputValue );
        // stupid simple parsing...
    } else if ( inputValue == 'bal' || inputValue == 'balance' ) {
        balCMD( inputValue );
    } else if ( inputValue == 'help' || inputValue == 'hlp' ) {
        helpCMD( inputValue );
    } else if ( inputValue == 'send' ) {
        sendCMD( inputValue );
    } else if ( inputValue == 'trans' 
        || inputValue == 'transactions'
        || inputValue == 'tran'
        || inputValue == 'transaction') {
        transCMD( inputValue );
// korean
    } else if ( inputValue == '안녕') {
        welcomeK( inputValue );
    } else {
        unknownCMD( inputValue );
    };  // ( stupid simple parsing )

    // Feedback on Variables
    commandCount++;
    $( '#commandCountFeed span' ).html( commandCount );

}// ( parseCommand )

/******************
    Commands
*******************/

// ENGLISH
// Balance
function balCMD( inputValue ) {
    var feedbackValue = balanceMSG;
    displayFeedback(inputValue, feedbackValue);
}

// Help
function helpCMD( inputValue ) {
    var feedbackValue = helpMSG;
    displayFeedback(inputValue, feedbackValue);
}

// Send
function sendCMD( inputValue ) {
    var feedbackValue = sendMSG;
    displayFeedback(inputValue, feedbackValue);
}

// Transaction
function transCMD( inputValue ) {
    var feedbackValue = transMSG;
    displayFeedback(inputValue, feedbackValue);
}

// Unknown
function unknownCMD( inputValue ) {
    var feedbackValue = unknownMSG;
    displayFeedback(inputValue, feedbackValue);
}

// Welcome
function welcomeCMD( inputValue ) {
    var feedbackValue = welcomeMSG;
    displayFeedback(inputValue, feedbackValue);
}

// KOREAN
// Korean 안녕
function welcomeK( inputValue ) {
    var feedbackValue = kWelcomeMSG;
    displayFeedback(inputValue, feedbackValue);
}


/**********************
    Display Commands
***********************/
// Register and display messages
function displayFeedback(inputValue, feedbackValue) {

    // Get the value from the input box
    $( '.recordSent' ).text( inputValue );

    //whatResponse();
    $( '.recordReceived' ).text( feedbackValue );

};// ( Register and display messages )


/* EXAMPLE: Define element first
    // Get a handle on the first button element in the document.
    var button = document.querySelector( "button" );
 
    // If a user clicks on it, say hello!
    button.addEventListener( "click", function( ev ) {
        alert( "Hello" );
    }, false);

*/