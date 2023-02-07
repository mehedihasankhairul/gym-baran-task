import Head from "next/head";
import BestFullBody from "../components/BestFullBody";
import DailyWorkOut from "../components/DailyWorkOut";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWork from "../components/HowItWorks";
import Programs from "../components/Programs";
import StaticBar from "../components/StaticBar";
import Testimonials from "../components/Testimonial";
import TextSection from "../components/TextSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gym Baran</title>
        <meta
          name="description"
          content="Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" lg:w-[1440px]  mx-auto">
        <HeroSection />
        <TextSection />
        <StaticBar />
        <BestFullBody />
        <DailyWorkOut />
        <HowItWork />
        <Programs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
