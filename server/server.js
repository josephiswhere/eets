const express = require("express");
const app = express();
// const fs = require('fs');
const path = require("path");

//import controlers?

// statically serve everything in the build folder on the route '/build'
app.use("/", express.static(path.join(__dirname, "../build")));
app.use(express.json());

app.get(
  "/api/users/",
  //file controler?
  //we will want to check if the user is logged in perhaps via cookies?
  (req, res) => {
    console.log(req.headers.chef)
    // const chef = 
    // fs.writeFile()
    let users = ['Bob', 'Bill', 'Steve']
    res.status(200).send({users: users});
  }
);

// serve index.html on the route '/'
// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'));
//   });

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
