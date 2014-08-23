

$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        //alert( "The link will no longer take you to jquery.com" );
        $( this ).hide( "slow" );
        event.preventDefault();
        
    });
    $( "button" ).click(function() {
        alert( "Message Sent" );
    })
});
//$( "a" ).addClass( "test" ); //make bold
// $( "a" ).removeClass( "test" ); //remove bold