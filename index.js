const express = require("express");
const app = express();

app.set('views', "./views");
app.set("view engine", "pug");

app.use((req, res, next)=>{
    const date = new Date()
    console.log(`request time : ${date.getHours()} h`);
    next();
})

app.get("/", (req, res)=>{
    res.render("home", {titre: "home page"})
});

app.get("/contact", (req, res)=>{
    res.render("contact", {titre: "conatct page"})
});

app.get("/services", (req, res)=>{
    res.render("services", {titre: "service page"})
});

app.listen(5000, ()=>console.log('Server runing on port : 5000'));
