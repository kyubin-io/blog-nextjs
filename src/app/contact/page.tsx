import ContactMe from "@/components/ContactMe";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <ContactMe />
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
