const bbCore = require('sdk');



exports.present = function(data, callback){

  console.log("Slack data:", data)

  var slack_response;

  if (bbCore.getConfigValue("team_domain") == "bookingbug"){
    slack_response = { 
      text: ":musical_score: :musical_note: :musical_note: :musical_note: \n" +
      "8 Maids a milking\n" + 
      "7 Swans a swimming\n" + 
      "6 Geese a laying\n" +
      "5 Gold Rings\n" + 
      "4 Calling Bird\n" +
      "3 French Hens\n" +
      "2 Turtle Doves\n" +
      "a partridge in a pair tree\n" + 
      ":musical_note: :musical_note: :musical_note: :musical_note: :musical_note: "
    }
  } else {
    slack_response = {text: "Sorry, no presents for you"}
  }

  callback(null, {
    proxy: true,
    response: slack_response
  });
}

