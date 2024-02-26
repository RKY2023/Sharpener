import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MeetupList from '@/components/meetups/MeetupList'
import { useEffect, useState } from 'react'
// import React from 'react';
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

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data frin an API

  return {
    props: {
      meetups: DUMMyY_MEETUPS,
    },
  }
}
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

function Home (props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(DUMMyY_MEETUPS);
  // },[]);
  // console.log(props.meetups);
  
  return (
    // <MeetupList meetups={DUMMyY_MEETUPS} />
    <MeetupList meetups={props.meetups} />
  );
};

export default Home;