const express= require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app =express();

require('dotenv').config();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);


const Role = db.role;

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Role based access control application." });
});

const PORT = process.env.PORT|| 3001

db.mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");  
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// routes
require("./app/routes/authroutes")(app);
require("./app/routes/userroutes")(app);

app.listen(PORT,()=>{

    console.log("Server Started At Port ",PORT);
})

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "customer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'customer' to roles collection");
      });

      new Role({
        name: "vendor"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'vendor' to roles collection");
      });

      
    }
  });
}

