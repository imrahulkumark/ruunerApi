const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/olympics")
.then( () => {
    console.log("connenction successful")
}).catch( (err) => {
    console.log("No connections");
})