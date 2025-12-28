import Subtitle from "./Subtitle";
export default function TitleCard({ titleObj }) {
  return (
    <>
      <Subtitle text={titleObj.subtitle} />
      <h2 className="text-5xl font-bold max-w-100 text-center py-5">
        {titleObj.title}
      </h2>
      <p className="max-w-110 text-center ">{titleObj.description}</p>
    </>
  );
}
