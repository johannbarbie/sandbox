$( document ).ready(function() {

// Click the 'Send' button
$( 'button' ).click(function() {

    // Get the value from the input box
    var value = $( 'input' ).val();
    $( '.recordSent' ).text( value );

    //whatResponse();
    $( '.recordReceived' ).text( 'testing 2 and all that' );

    });

});




// Reference or Old stuff
/*
    $( "a" ).click(function( event ) {
        //alert( "The link will no longer take you to jquery.com" );
        $( this ).hide( "slow" );
        event.preventDefault();
        
    });

function(data) {
// redirect after 'Enter' is pressed in input fields
$( 'input' ).keydown(function(event){
    if(event.keyCode==13){
        $( 'button' ).trigger( 'click' );
    }
});

*/
