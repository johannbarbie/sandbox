$( document ).ready(function() {
// Initial test
window.onload = function() { alert( 'Welcome to the 37coins SMS emulator' ); }; // ( Initial test )

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

    // hello generates welcome message
    if ( inputValue == 'hello' ){
        var feedbackValue = welcomeMSG;
    } else {
        var feedbackValue = unknownMSG;
    };

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

/******************
    SMS responses
********************/
var welcomeMSG = 'welcome';
var unknownMSG = 'unknown command, please try again';
// ( SMS responses )



/* EXAMPLE: Define element first
    // Get a handle on the first button element in the document.
    var button = document.querySelector( "button" );
 
    // If a user clicks on it, say hello!
    button.addEventListener( "click", function( ev ) {
        alert( "Hello" );
    }, false);

*/