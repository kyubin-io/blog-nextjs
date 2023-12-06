import { getAllPosts } from "@/service/posts";
import CarouselSection from "./CarouselSection";

export default async function YouMayLike() {
  const posts = await getAllPosts();

  return (
    <section>
      <h3 className="font-bold my-2">You May Like</h3>
      <CarouselSection posts={posts} />
    </section>
  );
}
