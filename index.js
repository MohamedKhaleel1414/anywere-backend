const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const dotenvconfig = require("dotenv").config();
const historyRouter = require("./routes/historyRoute");
const logingRouter = require("./routes/loginRoute");
const mongo = require("./connectionDatabase/mongoose");

app.use(cors({origin:true,credentials:true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/history", historyRouter);
app.use("/auth", logingRouter);

app.listen(port, () => console.log(`I'm listening to port ${port}!`));

module.exports = app;
