/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
  $(".new-tweet").hide();

  const renderTweets = function (tweets) {
    for (i = tweets.length - 1; i >= 0; i--){
      $('#tweets-container').append(createTweetElement(tweets[i]));
    }
  };

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

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets
    });
  }
  loadTweets();

  $("#compose-button").click(function() {

    $(".new-tweet").slideToggle( "slow");
    $("#tweet-input").focus();

});

})
