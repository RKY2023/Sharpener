import React from "react";
import Layout from '../Layout/Layout';
import ProfileUpdate from '../Profile/ProfileUpdate';
import ProfileData from '../Profile/ProfileData';

const Profile = (props) => {
    return (
        <>
        <Layout>
            <ProfileUpdate />
            <ProfileData />
        </Layout>
        </>
    );
};
export default Profile;