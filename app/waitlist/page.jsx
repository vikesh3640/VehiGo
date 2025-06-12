"use client";

import React from "react";
import Head from "next/head";

export default function WaitlistPage() {
  return (
    <>
      <Head>
        <title>Waitlist</title>
      </Head>
      <div className="mt-20 fixed w-full">
      <iframe style={{width:"100%"}} height="800" src="https://vehigowaitlist.created.app" title="Waiting List Landing Page" frameBorder="0"></iframe>
      </div>
    </>
  );
}
