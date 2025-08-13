import Header from "@/components/Header";
import React from "react";

const Page = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <main className="wrapper page">
      <Header />
      <h1 className="text-2xl font-karla">Welcome to ScreenCastly</h1>
    </main>
  );
};

export default Page;
