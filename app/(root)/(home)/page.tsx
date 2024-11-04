import { ClerkProvider, UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <ClerkProvider>
      <div>
        <h1>Hello</h1>
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </ClerkProvider>
  );
};

export default Home;
