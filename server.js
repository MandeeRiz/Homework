const express= require ("express")
const app = express();


app.get("/greeting/:name", function(req,res){
    res.send('"hello ' + req.params.name + "!")
})


app.listen(3000,()=>{
    console.log("listening on 3000")
})