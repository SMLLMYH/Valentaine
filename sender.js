//bot token
var telegram_bot_id = "6571511177:AAH8-6ZY7UkeI9jjtw23CFA3H5EYz3LaM4E";
//chat id
var chat_id = 1821805857;
var message;
var ready = function () {
  message = document.getElementById("message").innerHTML =
    "She said yes from valentine. You better be ready you little cunt";
  message = "Message: " + message;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  document.getElementById("message").value = "";
  return false;
};
