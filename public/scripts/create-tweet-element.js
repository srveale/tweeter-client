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