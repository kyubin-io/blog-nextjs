import ContactForm from "@/components/ContactForm";
import { FaGithubSquare, FaLinkedin, FaBlogger } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Send an email to Kyubin",
};

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

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>kyubin.it@google.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
