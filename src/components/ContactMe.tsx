import { FaGithubSquare, FaLinkedin, FaBlogger } from "react-icons/fa";

const ICON_CLASS = "text-6xl";

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center mt-2 mb-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>kyubin.it@google.com</p>
      <div className="flex">
        <FaGithubSquare className={ICON_CLASS} />
        <FaLinkedin className={ICON_CLASS} />
        <FaBlogger className={ICON_CLASS} />
      </div>
    </div>
  );
}
