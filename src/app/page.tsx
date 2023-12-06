import CarouselPosts from "@/components/CarouselPosts";
import Hero from "../components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </>
  );
}
