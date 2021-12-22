const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const PropertiesSchema = new Schema({
  title: String,
  rent: String,
  description: String,
  location: String,
});

module.exports = mongoose.model(`Property`, PropertiesSchema);
