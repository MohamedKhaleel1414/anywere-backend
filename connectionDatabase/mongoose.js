const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/anywere").then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
    console.log("error occured!");
});
