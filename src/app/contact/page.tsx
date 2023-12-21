import ContactMe from "@/components/ContactMe";
import EmailForm from "@/components/EmailForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <ContactMe />
      <EmailForm />
    </div>
  );
}
