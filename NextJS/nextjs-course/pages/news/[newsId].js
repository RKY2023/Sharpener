import { useRouter } from "next/router";

// import React from "react";
function news () {
    const router = useRouter();
    console.log(router.query.newsId);
    return <h1>The Detail page</h1>
};
export default news;