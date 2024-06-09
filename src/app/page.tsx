"use client";
import Authentication from "@/components/Authentication/Authentication";
import HeroSection from "@/components/HeroSection/Herosection";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      {/* <Authentication /> */}
      <Head>
        <title>Ekathrass</title>
        <meta
          name="description"
          content="Join Ekathrass for real-time live support from real people."
        />
      </Head>
      <HeroSection />
    </main>
  );
}
