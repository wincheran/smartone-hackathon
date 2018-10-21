'use strict';
     
var http = require('http');
     
// Close dialog with the customer, reporting fulfillmentState of Failed or Fulfilled ("Thanks, your pizza will arrive in 20 minutes")
function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}
 
// --------------- Events -----------------------

function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const flawType = slots.flawType;
    
    
    http.get('http://13.125.255.64:90/flaw?type='+flawType, function(res) {
  }).on('error', function(e) {
  });
  
  influxSend(flawType)
    
    callback(close(sessionAttributes, 'Fulfilled',
    {'contentType': 'PlainText', 
    'content': `Okay, I'll help you with the ${flawType} problem. `}));
    
}
 
// --------------- Main handler -----------------------
 
// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};



function influxSend(flawType) {
  // Build the post string from an object
  var post_data = 'flaw,flawType='+flawType;

  // An object of options to indicate where to post to
  var post_options = {
      url: 'http://13.125.255.64:8086/write?db=smartonedb',
      method: 'POST'
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding(null);
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}