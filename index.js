const express = require("express");
const connect = require("./check");
const app = express();
app.use(express.json());

let db = [{ name:"akshar",course:"full stack",grid:"1301",id:1 }]

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the middleware server");
});

app.get("/student", (req, res) => {
  res.status(200).send(db);
})

app.get("/index",(req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/student",(req, res) => {
    let newstudent = {
      name : req.body.name,
      course : req.body.course,
      grid : req.body.grid,
      id : db.length+1
    }
    db.push(newstudent)
    res.status(200).send(newstudent);
});

app.listen(8090, () => {
    connect()
    console.log("listening on port 8090");
});

