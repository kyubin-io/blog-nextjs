import Card from "@/components/Card";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <article className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => {
        return (
          <div key={post.path}>
            <Card post={post} />
          </div>
        );
      })}
    </article>
  );
}
