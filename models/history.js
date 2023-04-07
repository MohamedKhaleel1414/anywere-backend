const mongoose = require("mongoose");

const historyCollection = new mongoose.Schema(
  {
    carrier: {
      type: String,
      required: true,
    },
    country_code: {
      type: String,
      required: true,
    },
    country_name: {
      type: String,
      required: true,
    },
    country_prefix: {
      type: String,
      required: true,
    },
    international_format: {
      type: String,
      required: true,
    },
    line_type: {
      type: String,
      required: true,
    },
    local_format: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    valid: {
      type: Boolean,
      require: true,
    },
    location: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    strict: false,
  }
);

module.exports = mongoose.model("historyCollection", historyCollection);
