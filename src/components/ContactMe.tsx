import { FaGithubSquare, FaLinkedin, FaBlogger } from "react-icons/fa";

const LINKS = [
  {
    icon: <FaGithubSquare />,
    url: "https://github.com/kyubinAgnes",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/kyubin-agnes/",
  },
  {
    icon: <FaBlogger />,
    url: "https://mnemoni-k.blogspot.com/",
  },
];

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center my-2">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>kyubin.it@google.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              rel="noreferrer"
              className="text-5xl hover:text-yellow-400"
            >
              {link.icon}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
