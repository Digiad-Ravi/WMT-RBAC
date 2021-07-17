exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.customerBoard = (req, res) => {
  res.status(200).send("Customer Content.");
};

exports.vendorBoard = (req, res) => {
  res.status(200).send("Vendor Content.");
};

