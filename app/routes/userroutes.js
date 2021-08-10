const { authJwt } = require("../middlewares");
const controller = require("../controllers/usercontroller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "jwt-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/customer", [authJwt.verifyToken, authJwt.isCustomer], controller.customerBoard);

  app.get(
    "/api/test/vendor",
    [authJwt.verifyToken, authJwt.isVendor],
    controller.vendorBoard
  );

  app.get("/api/customer/:customerid", controller.customer);

};
