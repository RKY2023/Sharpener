import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MeetupList from '@/components/meetups/MeetupList'
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
]

export default function Home() {
  return (
    <MeetupList meetups={DUMMyY_MEETUPS} />
  )
}
