const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || "3000";
app.set("port", port);

app.use('/', function(req,res){
res.send("cipeczka");
});

app.listen(port, () => console.log(`Server running on localhost:${port}`));