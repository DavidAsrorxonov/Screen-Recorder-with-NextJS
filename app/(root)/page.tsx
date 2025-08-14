import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyVideoCardData } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />

      <section className="video-grid">
        {dummyVideoCardData.map((cardInfo, idx) => (
          <VideoCard {...cardInfo} key={idx} />
        ))}
      </section>
    </main>
  );
};

export default Page;
