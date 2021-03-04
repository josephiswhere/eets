const express = require("express");
const app = express();
const path = require("path");

//import controlers?

// statically serve everything in the build folder on the route '/build'
app.use("/", express.static(path.join(__dirname, "../build")));
app.use(express.json());

app.use(
  "/api/users/",
  //file controler?
  //we will want to check if the user is logged in perhaps via cookies?
  (req, res) => {
    console.log(req.body)
    res.status(200);
  }
);

// serve index.html on the route '/'
// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'));
//   });

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
