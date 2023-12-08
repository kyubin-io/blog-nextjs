import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h3 className="text-2xl font-bold">Featured Posts</h3>
      <PostGrid posts={posts} />
    </section>
  );
}
