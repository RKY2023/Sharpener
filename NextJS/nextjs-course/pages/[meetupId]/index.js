import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <>
        <MeetupDetail 
            title='title 1'
            image='https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg'
            address='Address dasdas das'
            description='desct fklsdfhjlkj'
        />
        </>
    )
};

export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
            
        ],
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'title 111',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg',
                address: 'some Street 5 sonme city',
                description: 'desct fklsdfhjlkj',
            },
        },
    }

}
export default MeetupDetails;