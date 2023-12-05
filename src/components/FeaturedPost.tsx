import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function FeaturedPost() {
  const posts = await getFeaturedPosts();
  return (
    <>
      <h3 className="font-bold my-2">Featured Posts</h3>
      <PostGrid posts={posts} />
    </>
  );
}
