const express = require("express");
const connect = require("./check");
const student = require("./student");
const app = express();
app.use(express.json());

let db = [{ name:"akshar",course:"full stack",grid:"1301",id:1 }]

app.get("/", async (req, res) => {
   let data = await student.find()
   res.send(data);
});

app.get("/student", (req, res) => {
  res.status(200).send(db);
})

app.get("/index",(req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/student",async (req, res) => {
    // let newstudent = {
    //   name : req.body.name,
    //   course : req.body.course,
    //   grid : req.body.grid,
    //   id : db.length+1
    // }
    await student.create(req.body);
    
});

app.listen(6000, () => {
    connect()
    console.log("listening on port 8090");
});

