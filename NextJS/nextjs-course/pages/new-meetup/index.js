import NewMeetupForm from "@/components/meetups/NewMeetupForm";

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
        <NewMeetupForm onAddMeetup={addMeetupHandler} getMeetup={getMeetupHandler} />
        </>
    );
};

export default NewMeetupPage;