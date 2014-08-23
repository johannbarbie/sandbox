$( document ).ready(function() {

// Initial test
window.onload = function() {
    alert( 'Welcome to the 37coins SMS emulator' );
}; // ( Initial test )


// Click the 'Send' button
$( 'button' ).click(function() {
    alert( 'Handler for .click() called' );
});// ( Send button )

// Hit 'enter' on form
$( '#textBox' ).keydown(function(){
    if( event.which == 13 ){
      alert( 'Handler for .keydown() called' ); 
      registerDisplay; 
    };
});// ( Enter button )

// Register and display messages
(function registerDisplay() {

    // Get the value from the input box
    var value = $( 'input' ).val();
    $( '.recordSent' ).text( value );

    //whatResponse();
    $( '.recordReceived' ).text( 'testing 2 and all that' );

});// ( Register and display messages )


});// ( document )







/* EXAMPLE: Define element first
    // Get a handle on the first button element in the document.
    var button = document.querySelector( "button" );
 
    // If a user clicks on it, say hello!
    button.addEventListener( "click", function( ev ) {
        alert( "Hello" );
    }, false);

*/