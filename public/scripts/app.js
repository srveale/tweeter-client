/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
  const tweetAge = Math.round((Date.now() - tweetData.created_at) / 1000 / 3600 / 24);
  $footer.append($("<p>").addClass("tweet-age").html(tweetAge + ' days ago'));

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

$(document).ready(function(){
  //var $tweet = createTweetElement(tweetData);
  //console.log($tweet);
  // $('#tweets-container').append($tweet);
  renderTweets(data);
})
