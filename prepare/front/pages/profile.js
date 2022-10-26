import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

import {} from "@ant-design/icons";

import FollowList from "../components/FollowList";
const Profile = () => {
  const followerList = [
    { nickname: "구리", description: "나는 구리" },
    { nickname: "버디", description: "나는 버디" },
    { nickname: "무지", description: "나는 무지" },
  ];
  const followingList = [
    { nickname: "구리", description: "나는 구리" },
    { nickname: "버디", description: "나는 버디" },
    { nickname: "무지", description: "나는 무지" },
  ];

  return (
    <div>
      <Head>
        <title>내 프로필 | Clone Insta</title>
      </Head>
      <AppLayout>
        <FollowList data={followerList} header="팔로워 목록" />
        <FollowList data={followingList} header="팔로잉 목록" />
      </AppLayout>
    </div>
  );
};

export default Profile;
