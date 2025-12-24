import Breadcrumbs from "./ui/Breadcrumbs";

export default function Title() {
  return (
    <section className="text-center flex flex-col items-center py-20">
      <Breadcrumbs />
      <h1 className="text-7xl font-bold mb-5 text-blue-950">Contact</h1>
      <p className="text-balance max-w-lg mx-auto text-blue-950/80">
        We can help you develop and execute a clear and strategic IT roadmap
        with priorities that are closely linked to business goals.
      </p>
    </section>
  );
}
