const express= require ("express")
const app = express();


app.get("/greeting/:name", function(req,res){
    res.send('"hello ' + req.params.name + "!")
})

app.get("/tip/:total/:tipPercentage", function(req,res){
    let total = req.params.total; 
    let tipPerc = req.params.tipPercentage;
    let fraction = tipPerc / 100;
    fraction *= total;
    let sendThis = fraction.toString();
    res.send(sendThis);
})

app.get("/magic/:question", function(req,res){
    let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let q = req.params.question;
    q.replace(/%20/g, " ")
    let randomNum = Math.floor(Math.random()* answers.length)

    res.send(q + "<h1>" + answers[randomNum] + "</h1>");
})


app.listen(3000,()=>{
    console.log("listening on 3000")
})