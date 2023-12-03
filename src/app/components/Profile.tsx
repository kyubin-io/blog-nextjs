import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col items-center mx-auto mt-4">
      <Image
        src="/img/profile.jpeg"
        width={200}
        height={200}
        className="rounded-full"
        alt="profile"
      />
      <h2 className="text-2xl font-bold">Hi, I'm Kyubin</h2>
      <h3 className="font-bold">Full-stack Engineer</h3>
      <h3 className="">꿈을 코딩하는 사람</h3>
      <button className="bg-amber-400 px-2 py-1 cursor-pointer rounded-lg">
        Contact Me
      </button>
    </div>
  );
}
