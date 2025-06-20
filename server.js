require("dotenv").config();
const express = require("express");


const {connectDb} = require('./src/config/databases')


const app = express();
app.use(express.json());


const restakersRoute = require("./src/routers/restakers");
const validatorsRoute = require("./src/routers/validators");
const rewardsRoute = require("./src/routers/rewards")


app.use("/restakers", restakersRoute);
app.use("/validators", validatorsRoute);
app.use("/rewards", rewardsRoute);



connectDb().then(() =>{
    console.log("Database connect successfully")
    app.listen(3000 , () =>{
        console.log("server is running on http://localhost:3000/")
    })
}).catch((err) =>{
    console.error("Fail to connect")
})
