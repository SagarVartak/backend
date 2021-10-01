var express = require("express");
var axios = require("axios");
const { response } = require("express");
const app = express();

app.get("/", (req,res)=>{
  res.send("welcome");
})
app.get("/data", async (req, res) => {
    // res.send("Welcome");
    var newdata = await axios.get("https://api.imagekit.io/v1/files",{
        auth:{
            username:"private_FEQHGrJPnn7Nl/Ymv+UByhUB4jE=",
            password:"Sagar@992370"
        },
        headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                 },
                 crossdomain: true
    }).then(response => {
        // console.log("respone",response);
        return response.data;
    }).catch(err => {
        console.log(err);
    })
    console.log(newdata);
    res.json(newdata);
  });
  
  app.listen(process.env.PORT || 3000, function () {
    console.log(
      "Express server listening on port %d in %s mode",
      this.address().port,
      app.settings.env
    );
  });