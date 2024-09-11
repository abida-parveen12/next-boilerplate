import Head from "next/head";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <title>Next Biolerplate</title>
        </Head>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
