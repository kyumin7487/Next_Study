'use client';

import UserProfileCard from "./user-profile-card";

export default function UserDetail() {
    const user = {
        profilePicture: 'profile/rose.JPEG',
        name: '장미',
        email: 'rose@gmail.com'
    };

    const handleContactClick = () => {
        window.alert('Contact button clicked!');
    };

    return(
        <>
            <h1>사용자 프로필</h1>
            <UserProfileCard user={user} onContactClick={handleContactClick}/>
        </>
    )
}