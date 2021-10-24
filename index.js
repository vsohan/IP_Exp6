const express = require("express");
const bodyparser = require("body-parser");
const { text } = require("express");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

app.post("/bmicalculator", function (req, res) {
	heigh = parseFloat(req.body.Height);
	weigh = parseFloat(req.body.Weight);
	bmi = weigh / (heigh * heigh);

	bmi = bmi.toFixed();

	req_name = req.body.Name;

	
	if (bmi < 19) {
		res.send("<h3>Hello " + req_name + "," + 
				" Your BMI is around: " + bmi +
				"<h2>You are Under weight!" );
	} else if (19 <= bmi && bmi < 25) {
		res.send("<h3>Hello " + req_name + "," +
				"Your BMI is around:" + bmi +
				"<centre><h2> You are Normal weight!");
	} else if (25 <= bmi && bmi < 30) {
		res.send("<h3>Hello " + req_name + "," +
				" Your BMI is around: " + bmi +
				"<centre><h2>You are Over weight!");
	} else {
		res.send("<h3>Hello " + req_name + "," +      
				" Your BMI is around: " + bmi +
				"<centre><h2>You are Obese!");
	}
});

app.listen(3000, function () {
	console.log("Hello!!!");
});
