express  = require("express");
app = express();

fs = require("fs");

app.get("/", function(req, res){
	console.log("New client!");
	fs.readFile("webtest.html", "utf-8", function(err, data){
		if(err){
			res.send(err);
			return;
		}
		else{
			res.send(data);
		}
	});
});

app.listen(423, ()=>console.log("Test server running on 10.10.110.15:423."));
