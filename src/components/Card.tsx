import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function Card({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <div className="relative w-full h-48">
        <Image src={`/images/posts/${path}.png`} alt={title} fill />
      </div>
      <p className="text-sm text-right pr-2">{date.toString()}</p>
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <button className="text-sm bg-cyan-200 px-2 py-1 rounded-lg m-2">
        {category}
      </button>
    </Link>
  );
}
