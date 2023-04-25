import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./sections/Hero/Hero";
import Why from "./sections/Why/Why";
import Testimonial from "./sections/Testimonial/Testimonial";
import SignUp from "./sections/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className} dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert`}
      >
        <Hero />
        <Why />
        <Testimonial />
        <SignUp />
      </main>
      <Footer />
    </>
  );
}
