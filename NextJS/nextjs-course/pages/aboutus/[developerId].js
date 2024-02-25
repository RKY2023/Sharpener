import { useRouter } from "next/router";

// import React from "react";
const developer = (props) => {
    const router = useRouter();
    console.log(router.query.developerId);
    return (
    <>
    <h1>The Detail page {props.name}</h1>
    </>
    );
};
export default developer;