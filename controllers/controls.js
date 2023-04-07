const History = require("../models/history");

const save = (req, res) => {
  let newResult = new History(req.body);
  newResult.save().then((data)=>{
    res.send(data)
  }).catch((err)=>{
    console.log(err)
    res.send("failed!")
  })
}

const retrieve = (req, res) => {
  History.find({}).then((data) => {
    if (data) {
      res.send(data);
    }
  }).catch((err)=>{
    console.log(err)
    res.send("failed")
  });
}

module.exports = { save, retrieve };
