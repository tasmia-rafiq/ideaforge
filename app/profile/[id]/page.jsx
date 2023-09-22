"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();

            setUserPosts(data);
        };

        if(params?.id) fetchPosts();
    }, [params.id]);

  return (
    <Profile
        name={userName}
        desc={`Welcome to ${userName}'s profile page. Discover ${userName}'s impressive prompts and witness the imaginative prowess that sparks inspiration`}
        data={userPosts}
    />
  )
}

export default UserProfile;