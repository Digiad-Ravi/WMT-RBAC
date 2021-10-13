const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    company: String,
    avatar: [String],
    geo_location: { 
      latitude: String,
      longitude: String
    },
    is_approved: Boolean,
    active: Boolean,
    deleted: Boolean,
    created_on_utc_date: Date,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
