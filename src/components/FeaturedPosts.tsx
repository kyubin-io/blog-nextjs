import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h3 className="text-2xl font-bold">Featured Posts</h3>
      <PostsGrid posts={posts} />
    </section>
  );
}
