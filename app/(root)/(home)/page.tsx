import { ClerkProvider, UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <ClerkProvider>
      <div>
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </ClerkProvider>
  );
};

export default Home;
