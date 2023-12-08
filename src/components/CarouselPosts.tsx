import { getNonFeaturedPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarousel";
import Card from "./Card";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-4">
      <h3 className="text-2xl font-bold">You May Like</h3>
      <MultiCarousel>
        {posts.map((post) => (
          <Card key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
