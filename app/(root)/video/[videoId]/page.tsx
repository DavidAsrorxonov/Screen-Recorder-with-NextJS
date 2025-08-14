import React from "react";

const Page = async ({ params }: any) => {
  const { videoId } = await params;

  return <main className="wrapper page">VIDEO DETAILS PAGE {videoId}</main>;
};

export default Page;
