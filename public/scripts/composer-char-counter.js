$( document ).ready(function() {
    $("#tweet-input").on('keyup', function(event){
      const charsLeft = 140 - $(this).val().length;
      $(this).parent().find('.counter').html(charsLeft);

      if (charsLeft < 0) {
        $(this).parent().find('.counter').addClass('negative-chars-remaining');
      }
      if (charsLeft > -1) {
        $(this).parent().find('.counter').removeClass('negative-chars-remaining');
      }
    })
});