import { Post } from "@/service/posts";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function PostCard({ info }: { info: Post }) {
  return (
    <div className="w-full h-full bg-[url('/images/posts/${path}.png)] flex">
      <div className="w-1/2 flex">
        <FaArrowLeft />
      </div>
      <div className="w-1/2">
        <h2>{info.title}</h2>
        <p>{info.description}</p>
      </div>
    </div>
  );
}
