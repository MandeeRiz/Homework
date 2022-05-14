const express= require ("express")
const app = express();

app.get("/", function(req,res){
    res.send("well hello there!")
})

app.get("/:bottle", function(req,res){
    let bottle = req.params.bottle;
    let nextBottle = bottle - 1;
    if(bottle == 0){
        nextBottle = 99
        href = `http://localhost:3000/${nextBottle}`
        res.send(`${bottle} bottles of beer on the wall `+ "<a href=" + `${href}` + "> Start Over </a>")
    }
    href = `http://localhost:3000/${nextBottle}`
    res.send(`${bottle} bottles of beer on the wall `+ "<a href=" + `${href}` + ">take one down, pass it around </a>") 
    })







app.listen(3000,()=>{
    console.log("listening on 3000")
})