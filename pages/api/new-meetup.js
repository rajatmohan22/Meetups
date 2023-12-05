import Meetup from "../../data/schemas/meetupSchema";

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/meetups");

const newMeetupHandler = async (req, res) => {
  if (req.method === "POST") {
    const { title } = req.body;
    console.log(req.body);
    const newMeetup = await Meetup.create({
      title: title,
    });
    console.log(newMeetup);
    res.status(200).send({ message: "Meet added", body: title || "nothing" });
  }
};

export default newMeetupHandler;
