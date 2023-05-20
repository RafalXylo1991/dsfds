const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || "3000";
app.set("port", port);

app.use('/', function(req,res){
res.send("<img src='http://cdn.mypornpics.com/20/5/205047bc4_src.jpg'/>");
});

app.listen(port, () => console.log(`Server running on localhost:${port}`));