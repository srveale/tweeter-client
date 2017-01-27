$(document).ready(function(){
  $(".new-tweet").hide();

  const renderTweets = function (tweets) {
    if (tweets.length < 1) {
      console.log('here')
      $('#tweets-container').append($("<p>").html("There are no tweets yet! Why not compose the first one?"));
    } else {

      for (i = tweets.length - 1; i >= 0; i--){
        $('#tweets-container').append(createTweetElement(tweets[i]));

      }
    }
  };

    const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets
    });
  }

  $('#tweet-form').submit(function(){
    event.preventDefault();


    if ($(this).serialize().length < 6) {
      alert("Can't have empty tweet");

    } else if ($(this).serialize().length > 145){
      alert("Can't have tweet longer than 140 characters");

    } else {
      $('#tweets-container').empty();

      $.post(
       "/tweets",
       $(this).serialize(),
       function(data){
      });

      loadTweets();
    }
  });

  $("#compose-button").click(function() {
    $(".new-tweet").slideToggle( "slow");
    $("#tweet-input").focus();
  });

  loadTweets();
})