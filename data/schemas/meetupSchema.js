const { Schema, model, models } = require("mongoose");

const meetupSchema = Schema({
  title: String,
  image: String,
  address: String,
});

const Meetup = models.Meetup || model("Meetup", meetupSchema);
module.exports = Meetup;
