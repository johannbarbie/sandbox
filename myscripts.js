/************************
    variables (global?)
*************************/
var commandCount = 0;
var bitBalance = 0; //in BITs, one-millionth of a 'bitcoin'

/******************
    SMS responses
********************/
// ENGLISH Responses
var balanceMSG = 'Available balance: ';
var helpMSG = 'Help instructions here<br/>send = this<br/>bal = this<br/>pin = this';
var sendMSG = 'How much do you want to send?';
var transMSG = 'Here are the transactions that you have done';
var unknownMSG = 'Unknown command, please try again';
var welcomeMSG = 'Welcome to 37coins. SMS bitcoin wallet. Send commands to this gateway number. Reply HELP for more info or www.37coins.com';
//  KOREAN Responses
var kWelcomeMSG = '안녕하십니까!';

/**************************
    HTML and CSS Stuff
***************************/
$( document ).ready(function() {

    // Initial test, set user to 'new'
    window.onload = function() { 
        alert( 'Welcome to the 37coins SMS emulator' );
        $( '#commandCountFeed span' ).html( commandCount );
        $( '#balanceFeed span' ).html( bitBalance );
    }; // ( Initial test )

    // Click the 'Send' button
    $( 'button' ).click(function() {
        parseCMD(); 
    });// ( Send button )

    // Hit 'enter' on form
    $( '#textBox' ).keydown(function() {
        if( event.which == 13 ){
          parseCMD();
        };
    });// ( Enter button )

});// ( document )

/************************
    Parsing of commands
 ************************/
// return different command depending on input
function parseCMD() {
    var inputValue = $( 'input' ).val();

    // if user is new
    if ( commandCount == 0 ) {
        welcomeCMD( inputValue );
    // ENGLISH
    } else if ( inputValue == 'bal' 
             || inputValue == 'balance' ) {
        balCMD( inputValue );
    } else if ( inputValue == 'help' 
             || inputValue == 'hlp' ) {
        helpCMD( inputValue );
    } else if ( inputValue == 'send' ) {
        sendCMD( inputValue );
    } else if ( inputValue == 'trans' 
             || inputValue == 'transactions'
             || inputValue == 'tran'
             || inputValue == 'transaction') {
        transCMD( inputValue );
    // KOREAN
    } else if ( inputValue == '안녕') {
        welcomeK( inputValue );
    } else {
        unknownCMD( inputValue );
    };  // ( stupid simple parsing )
    // SPANISH?

    // Feedback on Variables
    commandCount++;
    $( '#commandCountFeed span' ).html( commandCount );

};// ( parseCommand )

/******************
    Commands
*******************/

// ENGRISH
// Balance
function balCMD( inputValue ) {
    var feedbackValue = balanceMSG + bitBalance;
    displayFeedback(inputValue, feedbackValue);
};

// Help
function helpCMD( inputValue ) {
    var feedbackValue = helpMSG;
    displayFeedback(inputValue, feedbackValue);
};

// Send
function sendCMD( inputValue ) {
    var feedbackValue = sendMSG;
    displayFeedback(inputValue, feedbackValue);
};

// Transaction
function transCMD( inputValue ) {
    var feedbackValue = transMSG;
    displayFeedback(inputValue, feedbackValue);
};

// Unknown
function unknownCMD( inputValue ) {
    var feedbackValue = unknownMSG;
    displayFeedback(inputValue, feedbackValue);
};

// Welcome
function welcomeCMD( inputValue ) {
    var feedbackValue = welcomeMSG;
    displayFeedback(inputValue, feedbackValue);
};

// KOREAN
// Korean 안녕
function welcomeK( inputValue ) {
    var feedbackValue = kWelcomeMSG;
    displayFeedback(inputValue, feedbackValue);
};


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

/* Javascipt shorthand 'if' statement

var n = $("#example div").length;
$("body").css("background", (n < 2) ? "green" : "orange");
*/

/* Javascipt shorthand 'switch' statement (*A switch statement may be better as its faster than running through a if/else statement.)

var test = "male";
switch (test) {
    case "female":
        // do something...
        break;
    case "male":
        // do something else...
        break;
    default:
        // do something if no match is found...
        break; // always break on default to keep consistency 
} */

/* Javascipt 'return' example
function addNumbers(a,b) {
    var c = a+b;
    return c;
}

document.write(addNumbers(3,6));

*/