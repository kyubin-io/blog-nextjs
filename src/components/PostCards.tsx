import { getFBData } from "@/service/posts";
import PostCard from "./PostCard";

export default async function PostCards({ path }: { path: string }) {
  const test = await getFBData(path);
  return (
    <div className="w-full h-44 flex">
      <PostCard info={test[0]} />
      <PostCard info={test[1]} />
    </div>
  );
}
