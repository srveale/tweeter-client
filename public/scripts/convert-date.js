const convertDate = function (date) {
  date /= 1000;
  // calculate (and subtract) whole days
  if (date > 86400) {
    var days = Math.floor(date / 86400);
    date -= days * 86400;
    return days > 1 ? days + " days ago": days + " day ago";
  }

  // calculate (and subtract) whole hours
  if (date > 3600) {
    var hours = Math.floor(date / 3600) % 24;
    date -= hours * 3600;
    return hours > 1 ? hours + " hours ago" : hours + " hour ago";
  }

  // calculate (and subtract) whole minutes
  if (date > 60) {
    var minutes = Math.floor(date / 60) % 60;
    date -= minutes * 60;
    return minutes > 1 ? minutes + " minutes ago" : minutes + " minute ago";
  }

  // what's left is seconds
  var seconds = Math.floor(date % 60);  // in theory the modulus is not required
  return seconds > 1 ? seconds + " seconds ago": seconds + " second ago";
}
