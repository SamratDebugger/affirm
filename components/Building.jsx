import Subtitle from "./Subtitle";

export default function Building() {
  return (
    <section className="py-25">
      <div className="max-w-1xl mx-auto p-5 flex items-center justify-center flex-col">
        <Subtitle text="Your path to success" />
        <h2 className="text-5xl font-bold max-w-100 text-center py-5">
          Start building the products your customers want
        </h2>
        <p className="max-w-110 text-center ">
          Spend less time writing a plan and more time building your business.
          We help you with the tools you need to communicate your idea.
        </p>
      </div>
    </section>
  );
}
