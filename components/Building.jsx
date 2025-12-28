import BuildingCard from "./BuildingCard";
import TitleCard from "./TitleCard";

export default function Building() {
  const titleObj = {
    subtitle: "Your path to success",
    title: "Start building the products your customers want",
    description:
      "Spend less time writing a plan and more time building your business. We help you with the tools you need to communicate your idea.",
  };
  return (
    <section className="py-25">
      <div className="max-w-1xl mx-auto p-5 flex items-center justify-center flex-col">
        <TitleCard titleObj={titleObj} />
      </div>
      <div className="max-w-1xl mx-auto grid grid-cols-3 gap-5 justify-between">
        <BuildingCard />
        <BuildingCard />
        <BuildingCard />
      </div>
    </section>
  );
}
