// import React from "react";
import Link from 'next/link';

const details = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
];
function aboutus () {
    const developerLinks = details.map((dev) =>(
        <li>
            <Link href={`/aboutus/${dev.id}`}>
                {dev.name}
            </Link>
        </li>
    ))
    return (
    <>
        <h1>The aboutus page</h1>
        <ul>
            {developerLinks}
        </ul>
    </>
    

    );

};
export default aboutus;