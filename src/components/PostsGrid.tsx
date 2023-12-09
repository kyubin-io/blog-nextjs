import { Post } from "@/service/posts";
import Card from "./Card";

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => {
        return (
          <li key={post.path}>
            <Card post={post} />
          </li>
        );
      })}
    </ul>
  );
}
