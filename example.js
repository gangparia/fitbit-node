// initialize the express application
var express = require("express"),
    app = express();

// initialize the Fitbit API client
var FitbitApiClient = require("fitbit-node"),
    client = new FitbitApiClient("228BSX", "6a1421682320690a85c85b78c6e59f15");

// launch the server
app.listen(3000, ()=>{
	console.log('server started on port --> 30000');
	console.log('testing');
});
