import Profile from "@/components/Hero";

const CONTENT_CLASS = "flex flex-col items-center mb-4";
const H2_CLASS = "text-2xl font-bold";

export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className="w-full bg-slate-200 flex flex-col items-center py-8 shadow-md mt-8">
        <div className={CONTENT_CLASS}>
          <h2 className={H2_CLASS}>Who Am I?</h2>
          <p>개발을 사랑하는 풀스택 개발자</p>
          <p>사람과 디자인을 담는 웹앱을 만들고 있음</p>
        </div>
        <div className={CONTENT_CLASS}>
          <h2 className={H2_CLASS}>Career</h2>
          <ul>
            <li>Gaon Platform(2020-2023)</li>
            <li>Gaon Platform(2017-2018)</li>
          </ul>
        </div>
        <div className={CONTENT_CLASS}>
          <h2 className={H2_CLASS}>Skills</h2>
          <p>
            React, Typescript, Next.js Node, Git, Clean Code, VS Code, MongoDB
          </p>
        </div>
      </section>
    </>
  );
}
