import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const onAddMeetup = async (formData) => {
    console.log(formData.title);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: formData.title }),
    });
    const JSONData = await response.json();
    console.log(JSONData);
  };
  return <NewMeetUpForm onAddMeetup={onAddMeetup} />;
};

export default NewMeetUpPage;
