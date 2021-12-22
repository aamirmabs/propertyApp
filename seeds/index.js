const mongoose = require(`mongoose`);
const Property = require(`../models/property`);

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

// clearing database before seeding
const seedDB = async () => {
  await Property.deleteMany({});
  const c = new Property({ title: `Property name xyz` });
  await c.save();
  console.log(c);
};

seedDB();
