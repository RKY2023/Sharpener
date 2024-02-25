import { useRouter } from "next/router";

// import React from "react";
function developer () {
    const router = useRouter();
    console.log(router.query.developerId);
    return <h1>The Detail page</h1>
};
export default developer;