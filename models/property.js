const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const propertiesSchema = new Schema({
  agentCode: String,
  title: String,
  image: String,
  type: String,
  rent: Number,
  area: String,
  city: String,
  postcode: String,
  bedrooms: Number,
  bathrooms: Number,
  latitude: Number,
  longitude: Number,
  features: [String],
  description: String,
  agentID: {
    type: Schema.Types.ObjectId,
    ref: `Agent`,
  },
});

propertiesSchema.pre(`findOneAndDelete`, async function (data) {
  console.log(`PRE propertiesSchema`);
  console.log(data);
});

propertiesSchema.post(`findOneAndDelete`, async function (data) {
  console.log(`POST propertiesSchema`);
  console.log(data);
});

module.exports = mongoose.model(`Property`, propertiesSchema);
