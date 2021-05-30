const fs = require("fs");
const http = require("http");
const PORT =(process.env.PORT || 8000);
const time = Date().toString();// getting the current time
//using HTTP createServer
fs.writeFile('Date/date_time.txt',time,(err)=>{//writing the current time to the 
    if(err) throw err;
    console.log("Data saved Successfully");
});
fs.readFile('Date/date_time.txt',function(err,dt){
    if(err)
        throw err;
    http.createServer(function(req,res){
        res.writeHeader(200,{"Content-Type": "text/html"});
        res.write(dt);
        res.end();
    }).listen(PORT,()=>{console.log("Listening to port"+PORT);});
})

//process.env.PORT