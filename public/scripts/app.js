/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

  const createTweetElement = function (tweetData) {
  $tweet = $("<article>").addClass("tweet");

  const $header = $("<header>").addClass("tweet-header")
  const profileSrc = tweetData.user.avatars.small;
  $header.append($("<img>").addClass("profile-pic").attr("src", profileSrc));

  $header.append($("<h2>").html(tweetData.user.name));
  $header.append($("<p>").addClass("handle").html(tweetData.user.handle));
  $tweet.append($header);

  $tweetBody = $("<section>").addClass("tweet-body");
  $tweetBody.append($("<p>").html(tweetData.content.text));
  $tweet.append($tweetBody);

  $footer = $("<footer>").addClass("tweet-footer");
  const tweetAge = convertDate(Date.now() - tweetData.created_at);
  $footer.append($("<p>").addClass("tweet-age").html(tweetAge));

  $footer.append($("<i>").addClass("icon fa fa-retweet").attr('aria-hidden', "true"));
  $footer.append($("<i>").addClass("icon fa fa-flag").attr('aria-hidden', "true"));
  $footer.append($("<i>").addClass("icon fa fa-heart").attr('aria-hidden', "true"));

  $tweet.append($footer);

  return $tweet;
};

  const renderTweets = function (tweets) {
    for (i = 0; i < tweets.length; i++){
      $('#tweets-container').append(createTweetElement(tweets[i]));
    }
  };

  //renderTweets(data);

  $('#tweet-form').submit(function(){
    event.preventDefault();
    // console.log('serialize', $(this).serialize().length);
    // console.log('val', $(this).val())

    if ($(this).serialize().length < 6) {

      alert("Can't have empty tweet");

    } if ($(this).serialize().length > 145){

      alert("Can't have tweet longer than 140 characters");

    } else {

    $.post(
     "/tweets",
     $(this).serialize(),
     function(data){
    });

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

  const convertDate = function (date) {
    date /= 1000;
    // calculate (and subtract) whole days
    if (date > 86400) {
      var days = Math.floor(date / 86400);
      date -= days * 86400;
      return days + " days ago";
    }

    // calculate (and subtract) whole hours
    if (date > 3600) {
      var hours = Math.floor(date / 3600) % 24;
      date -= hours * 3600;
      return hours + " hours ago";
    }

    // calculate (and subtract) whole minutes
    if (date > 60) {
      var minutes = Math.floor(date / 60) % 60;
      date -= minutes * 60;
      return minutes + " minutes ago";
    }

    // what's left is seconds
    var seconds = Math.floor(date % 60);  // in theory the modulus is not required
    return seconds + " seconds ago";
  }

})
