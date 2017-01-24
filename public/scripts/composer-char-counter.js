$( document ).ready(function() {
    console.log( "ready!" );

    $("#tweet-input").on('keyup', function(event){
      const charsLeft = 140 - $(this).val().length;
      $(this).parent().find('.counter').html(charsLeft);
      if (charsLeft < 0) {
        console.log('here');
        console.log($(this).parent().find('.counter'));
        $(this).parent().find('.counter').addClass('negative-chars-remaining');
      }
    })
});