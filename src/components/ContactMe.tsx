import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaBlogger } from "react-icons/fa";

const ICON_CLASS = "text-6xl";

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center mt-2 mb-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>kyubin.it@google.com</p>
      <div className="flex">
        <Link href={"https://github.com/kyubinAgnes"}>
          <FaGithubSquare className={ICON_CLASS} />
        </Link>
        <Link href={"https://www.linkedin.com/in/kyubin-kim-935788293/"}>
          <FaLinkedin className={ICON_CLASS} />
        </Link>

        <Link href={"https://mnemoni-k.blogspot.com/"}>
          <FaBlogger className={ICON_CLASS} />
        </Link>
      </div>
    </div>
  );
}
