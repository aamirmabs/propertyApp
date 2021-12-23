const { dictionary } = require(`./dictionary`);
const {
  types,
  areas,
  postcodes,
  features,
  descriptions,
  agentNames,
  agentAddresses,
  agentPhones,
} = dictionary;

const helperFunctions = {
  randMinMax: function (min, max) {
    return (
      Math.random() * (max.toFixed(9) - min.toFixed(9) + 1) +
      min
    ).toFixed(9);
  },
  randMinMaxFloor: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  randArrEle: function (arr) {
    // return arr[Math.floor(Math.random() * arr.length) + 1];
    return arr[Math.floor(Math.random() * arr.length)];
  },
  randIndex: function (arr) {
    return Math.floor(Math.random() * arr.length);
  },

  generateProperty: function () {
    const bedrooms = this.randMinMaxFloor(1, 9);
    const area = this.randArrEle(areas);
    const type = this.randArrEle(types);

    const propertyObject = {
      title: `${bedrooms}BHK ${type} in ${area}`,
      // type: types[Math.floor(Math.random() * types.length)],
      type: type,
      rent: this.randMinMaxFloor(333, 3333),
      area: area,
      postcode: this.randArrEle(postcodes),
      bedrooms: bedrooms,
      bathrooms: this.randMinMaxFloor(1, 3),
      latitude: this.randMinMax(53.327049, 53.639302),
      longitude: this.randMinMax(-2.094019, -2.73582),
      agentCode: (`0` + this.randMinMaxFloor(1, 18)).slice(-2),
      features: [
        this.randArrEle(features),
        // this.randArrEle(features),
        // this.randArrEle(features),
      ],
      description: `${this.randArrEle(
        descriptions
      )} The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.`,

      // ${this.randArrEle(
      //   descriptions
      // )} Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

      // ${this.randArrEle(
      //   descriptions
      // )} Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

      // ${this.randArrEle(
      //   descriptions
      // )} When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.`,
    };
    // await c.save();
    return propertyObject;
  },

  generateAgent: function () {
    const agentObject = {
      agentCode: (`0` + this.randMinMaxFloor(1, 20)).slice(-2),
      name: this.randArrEle(agentNames),
      address: this.randArrEle(agentAddresses),
      phone: this.randArrEle(agentPhones),
    };
    return agentObject;
  },
};

module.exports.helperFunctions = helperFunctions;
