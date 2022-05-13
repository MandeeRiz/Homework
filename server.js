const express= require ("express")
const app = express();


//app.get("/greeting/:name", function(req,res){
//    res.send('"hello ' + req.params.name + "!")
//})

app.get("/tip/:total/:tipPercentage", function(req,res){
    let total = req.params.total; 
    let tipPerc = req.params.tipPercentage;
    let fraction = tipPerc / total;
    fraction *= 100;
    let sendThis = fraction.toString();
    res.send(sendThis);
})


app.listen(3000,()=>{
    console.log("listening on 3000")
})