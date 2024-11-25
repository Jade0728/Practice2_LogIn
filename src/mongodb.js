const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
    //LoginSignUpTutorial: name of out database
    .then(() => {
    console.log("mongodb connected")
    })
    .catch(() => {
    console.log("failed to connect")
    })

    
const LogInSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
     },
    password: {
        type: String,
        required: true
     }
})
const User = mongoose.model("User", LogInSchema);
module.exports = User;