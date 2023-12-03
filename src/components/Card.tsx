import Image from "next/image";

export default function Card({
  title,
  description,
  date,
  category,
  path,
}: any) {
  return (
    <div className="w-72 h-80 text-center shadow-lg hover:scale-105 duration-150">
      <div className="relative w-72 h-48">
        <Image src={`/images/posts/${path}.png`} alt={title} fill />
      </div>
      <p className="text-sm text-right pr-2">{date}</p>
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <button className="text-sm bg-cyan-200 px-2 py-1 rounded-lg m-2">
        {category}
      </button>
    </div>
  );
}
