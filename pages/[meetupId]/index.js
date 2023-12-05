import MeetupDetails from "../../components/meetups/MeetupDetails";
import mongoose from "mongoose";

import Meetup from "../../data/schemas/meetupSchema";
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://rajat:admin123@cluster0.bs9lmip.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

const MeetupDetailsPage = (props) => {
  return <MeetupDetails title={props.meetups.title} />;
};

//Should be in this format.
// [
//   {
//     params: {
//       meetupId: "m1",
//     },
//   },
//   {
//     params: {
//       meetupId: "m2",
//     },
//   },
// ],

export default MeetupDetailsPage;
export async function getStaticPaths() {
  const meetupIds = await Meetup.find({}, "_id");
  const paths = meetupIds.map((meetupId) => {
    return { params: { meetupId: meetupId._id.toString() } };
  });

  return {
    fallback: false,
    paths,
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const specificMeetup = await Meetup.findOne({ _id: meetupId });
  console.log(specificMeetup);
  return {
    props: {
      meetups: {
        id: meetupId,
        title: specificMeetup.title,
      },
    },
  };
}
