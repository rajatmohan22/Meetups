import Meetup from "../../data/schemas/meetupSchema";

const mongoose = require("mongoose");
mongoose.createConnection(
  "mongodb+srv://rajat:admin123@cluster0.bs9lmip.mongodb.net/?retryWrites=true&w=majority"
);

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
