import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MeetupList from '@/components/meetups/MeetupList'
import { useEffect, useState } from 'react'
// import React from 'react';
import { MongoClient } from 'mongodb';

const DUMMyY_MEETUPS = [
  {
    id: 'm1',
    title: 'A',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg',
    address: 'varanasi ',
    description: 'GHAts'
  },
  {
    id: 'm2',
    title: 'B',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg',
    address: 'varanasi 2',
    description: 'GHAts 2'
  },
  {
    id: 'm3',
    title: 'V',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg',
    address: 'varanasi 3',
    description: 'GHAts 3'
  },
];

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data frin an API

//   return {
//     props: {
//       meetups: DUMMyY_MEETUPS,
//     },
//   }
// }
// // getStaticProps executed before main components
// export async function getStaticProps() { 
//   //
//   return {
//     props: {
//       meetups: DUMMyY_MEETUPS,
//     },
//     revalidate: 10 //10 secs
//   }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
      'mongodb+srv://xraj2023:LyfJlpM2nZlWQNh4@cluster0.i4rdwsy.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
  return {
    props: {
      meetups: meetups.map((meetup) =>({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
    })),
    },
    revalidate: 1
  };
};

function Home (props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(DUMMyY_MEETUPS);
  // },[]);
  // console.log(props.meetups);
  
  return (
    <>
    <Head>
      <title>NextJs Meet</title>
      <meta
        name='description'
        content='Get meet up '
      />
    </Head>
    {/* <MeetupList meetups={DUMMyY_MEETUPS} /> */}
    <MeetupList meetups={props.meetups} />
    </>
    
    
  );
};

export default Home;