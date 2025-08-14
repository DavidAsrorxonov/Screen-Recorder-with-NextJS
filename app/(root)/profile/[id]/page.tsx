import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyVideoCardData } from "@/constants";
import React from "react";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="tom@gmail.com"
        title="Tom"
        userImg="/assets/images/dummy.jpg"
      />

      <section className="video-grid">
        {dummyVideoCardData.map((cardInfo, idx) => (
          <VideoCard {...cardInfo} key={idx} />
        ))}
      </section>
    </div>
  );
};

export default Page;
