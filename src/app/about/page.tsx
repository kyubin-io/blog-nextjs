import Hero from "@/components/Hero";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>A full-stack developer who loves coding</p>
        <p>Creating web apps that involve people and design</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>Gaon Platform (2020 - 2023.6)</p>
        <p>Innogen (2017 - 2018)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Javascript, Typescript
          <br />
          Next.js, Python, Django
          <br />
          Node, Git, Clean Code
          <br />
          Vs code, IntelliJ, MongoDB, PostgreSQL
        </p>
      </section>
    </>
  );
}
