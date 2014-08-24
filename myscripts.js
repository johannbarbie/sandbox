/************************
    variables (global?)
*************************/
var commandCount = 0;
var bitBalance = 0; //in BITs, one-millionth of a 'bitcoin'


/******************
    SMS responses
********************/
var welcomeMSG = 'Welcome to 37coins. SMS bitcoin wallet. Send commands to this gateway number. Reply HELP for more info or www.37coins.com';
var sendMSG = 'How much do you want to send?';
var helpMSG = 'Help instructions here. send = this. bal = this. pin = this.';
var koreanMSG = '안녕하십니까!';
var unknownMSG = 'Unknown command, please try again';
var balanceMSG = 'balance is displayed here';
// ( SMS responses )

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
$( '#textBox' ).keydown(function(){
    if( event.which == 13 ){
      parseCommand();
    };
});// ( Enter button )

});// ( document )

/************************
    Parsing of commands
 ************************/
// return different command depending on input
function parseCommand(){

var inputValue = $( 'input' ).val();

// if user is new
if ( commandCount == 0 ){
    var feedbackValue = welcomeMSG;
    displayFeedback(inputValue, feedbackValue);
// stupid simple parsing...
} else if ( inputValue == 'send' ){
    var feedbackValue = sendMSG;
} else if ( inputValue == 'help' ){
    var feedbackValue = helpMSG;
} else if ( inputValue == '안녕' ){
    var feedbackValue = koreanMSG;
} else if ( inputValue == 'bal' ){
    var feedbackValue = balanceMSG;
} else {
    var feedbackValue = unknownMSG;
}; // ( simple parsing )

    commandCount++;
    
    // Feedback on Variables
    $( '#commandCountFeed span' ).html( commandCount );

    displayFeedback(inputValue, feedbackValue);

}// ( parseCommand )

/**********************
    Display Commands
***********************/
// Register and display messages
function displayFeedback(inputValue, feedbackValue) {

    // Get the value from the input box
    $( '.recordSent' ).text( inputValue );

    //whatResponse();
    $( '.recordReceived' ).text( feedbackValue );

}// ( Register and display messages )




/* EXAMPLE: Define element first
    // Get a handle on the first button element in the document.
    var button = document.querySelector( "button" );
 
    // If a user clicks on it, say hello!
    button.addEventListener( "click", function( ev ) {
        alert( "Hello" );
    }, false);

*/