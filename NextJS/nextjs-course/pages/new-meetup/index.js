import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";

const NewMeetupPage = (props) => {
    async function addMeetupHandler (enteredMeetupData) {
        console.log(enteredMeetupData);
        const response = await fetch('/api/hello', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        // getMeetupHandler();
    };

    async function getMeetupHandler () {
        const response = await fetch('/api/getMeetup');
        const data = await response.json();
        console.log(data);
    };
    
    return (
        <>
        <Head>
            <title>Add a new meetup</title>
            <meta
                name="description"
                content="networking opportunities."
            />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} getMeetup={getMeetupHandler} />
        </>
    );
};

export default NewMeetupPage;