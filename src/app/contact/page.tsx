import ContactMe from "@/components/ContactMe";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Send an email to Kyubin",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <ContactMe />
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
