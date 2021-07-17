const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./usermodel");
db.role = require("./rolemodel");

db.ROLES = ["customer", "vendor"];

module.exports = db;