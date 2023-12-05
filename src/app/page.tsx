import Image from "next/image";
import Hero from "../components/Hero";
import FeaturedPost from "@/components/FeaturedPost";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPost />
    </>
  );
}
