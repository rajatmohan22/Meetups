import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import Meetup from "../data/schemas/meetupSchema";
import mongoose from "mongoose";
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/meetups");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToDatabase();
// mongoose.connect("mongodb://127.0.0.1:27017/meetups"); // This is throwing error for some reaso.

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Rajat's React Meetups</title>
        <meta name="description" content="Browse Meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export default HomePage;
export async function getStaticProps() {
  /// This is equivalent to defining it. You must not seperately do "import getStaticProps" and all
  const dataToAdd = await Meetup.find();
  return {
    props: {
      meetups: dataToAdd.map((data) => {
        return {
          title: data.title,
          id: data._id.toString(),
          image: data.image,
          address: data.address,
        };
      }),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const res = context.res
//   const req = context.req
//   return {
//     props: DUMMY_MEETUPS,
//   };
// }
