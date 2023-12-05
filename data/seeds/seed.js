const mongoose = require("mongoose");
const Meetup = require("../schemas/meetupSchema");
mongoose
  .createConnection(
    "mongodb+srv://rajat:admin123@cluster0.bs9lmip.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Seeded");
  });

const dataToAdd = [
  {
    id: "m1",
    image: "https://example.com/meetup1.jpg",
    title: "Meetup 1",
    address: "Some address, somewhere",
  },
  {
    id: "m2",
    image: "https://example.com/meetup2.jpg",
    title: "Meetup 2",
    address: "Another address, another place",
  },
  {
    id: "m3",
    image: "https://example.com/meetup3.jpg",
    title: "Meetup 3",
    address: "Yet another address, somewhere else",
  },
  {
    id: "m4",
    image: "https://example.com/meetup4.jpg",
    title: "Meetup 4",
    address: "A different address, another place",
  },
  {
    id: "m5",
    image: "https://example.com/meetup5.jpg",
    title: "Meetup 5",
    address: "Some address, a different location",
  },
];

const seedData = async () => {
  await Meetup.insertMany(dataToAdd);
  console.log("Added");
};

seedData();
