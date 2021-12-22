const express = require("express");
const path = require(`path`);
const mongoose = require(`mongoose`);
const Property = require(`./models/property`);

// connecting to the localhost mongodb server
mongoose.connect(`mongodb://localhost:27017/propertyApp`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// setting up mongoose to connect to mongodb
const db = mongoose.connection;
db.on(`error`, console.error.bind(console.log(`MongoDB connection error`)));
db.once(`open`, () => {
  console.log(`MongoDB connected`);
});

// initialize app to express()
const app = express();

// setting ejs template engine and views base folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, `views`));

// route management
app.get(`/`, (req, res) => {
  // res.send(`GET: /`);
  res.render(`home`);
});

app.get(`/makeproperty`, async (req, res) => {
  const property = new Property({
    title: `3 BHK in Piccadilly, Manchester`,
    rent: 670,
    description: `A very nice property located in the middle of the town center with convenient connectivity to all parts of Manchester`,
    location: `Manchester`,
  });
  await property.save();
  res.send(property);
});

// starting the server
app.listen(3000, () => {
  console.log(`Serving on port 3000`);
});
