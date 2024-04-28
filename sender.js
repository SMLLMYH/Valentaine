//bot token
require("dotenv").config();
var telegram_bot_id = process.env.BOT_ID;
//chat id
var chat_id = process.env.CHAT_ID;
var message;
var ready = function () {
  message = document.getElementById("message").innerHTML =
    "She said yes from valentine.";
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
