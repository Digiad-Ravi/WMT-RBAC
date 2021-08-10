const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.customerBoard = (req, res) => {
  res.status(200).send("Customer Content.");
};

exports.vendorBoard = (req, res) => {
  res.status(200).send("Vendor Content.");
};

exports.customer = (req, res) => {
  User.findOne({
    _id: req.params.id
  }).populate("roles", "-__v")
  .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push(user.roles[i].name.toUpperCase());
      }

      res.status(200).send({
        id: user._id,
        user_name: user.username,
        first_name: user.firstname,
        last_name: user.lastname,
        email: user.email,
        roles: authorities,
        company_name: user.company
      });
    });
};

