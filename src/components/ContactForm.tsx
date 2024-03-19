"use client";

const H3_CLASS = "text-white font-bold";
const INPUT_CLASS = "mb-2 px-1 placeholder:text-black";

export default function EmailForm() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="w-[500px] bg-slate-500 flex flex-col rounded-lg p-4">
      <h3 className={H3_CLASS}>Your Email</h3>
      <input type="text" placeholder="Email" className={INPUT_CLASS} />
      <h3 className={H3_CLASS}>Subject</h3>
      <input type="text" placeholder="Hello" className={INPUT_CLASS} />
      <h3 className={H3_CLASS}>Message</h3>
      <textarea
        placeholder="Message"
        className={`${INPUT_CLASS} h-40`}
      ></textarea>
      <button
        type="submit"
        className="text-black font-bold bg-yellow-400"
        onClick={handleClick}
      >
        Submit
      </button>
    </form>
  );
}
