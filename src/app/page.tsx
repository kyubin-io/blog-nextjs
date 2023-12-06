import Image from "next/image";
import Hero from "../components/Hero";
import FeaturedPost from "@/components/FeaturedPost";
import YouMayLike from "@/components/YouMayLike";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPost />
      <YouMayLike />
    </>
  );
}
