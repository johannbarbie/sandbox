/************************
    variables (global?)
*************************/
var userNew;

$( document ).ready(function() {
// Initial test, set user to 'new'
window.onload = function() { 
    alert( 'Welcome to the 37coins SMS emulator' );
    //userNew = true;
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
if ( userNew == true ){
    userNew = false;
    inputValue == 'welcomeMSG';
} 
// stupid simple parsing...
    else if ( inputValue == 'send' ){
        var feedbackValue = sendMSG;
    } else if ( inputValue == 'help' ){
        var feedbackValue = helpMSG;
    } else if ( inputValue == '안녕' ) {
        var feedbackValue = koreanMSG;
    } else {
        var feedbackValue = unknownMSG;
    };

    displayFeedback(inputValue, feedbackValue);
}// ( parseCommand )


/******************
    SMS responses
********************/
var welcomeMSG = 'Welcome';
var unknownMSG = 'Unknown command, please try again';
var sendMSG = 'How much do you want to send?';
var helpMSG = 'Help instructions here';
var koreanMSG = '안녕하십니까!';
// ( SMS responses )


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