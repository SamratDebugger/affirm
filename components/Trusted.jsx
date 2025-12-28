export default function Trusted() {
  return (
    <section className="py-2 bg-base-200">
      <div className="flex max-w-1xl lg:flex-row flex-col mx-auto px-5 justify-between gap-y-8">
        <h1 className="lg:max-w-50 text-2xl font-bold max-lg:text-center ">
          Trusted by companies all over the world
        </h1>
        <div className="flex gap-8 items-center flex-wrap max-lg:justify-center  ">
          <img
            className="max-w-30 "
            src="/assets/brand/logo-1.webp"
            alt="logo-1"
          />
          <img
            className="max-w-30"
            src="/assets/brand/logo-2.webp"
            alt="logo-2"
          />
          <img
            className="max-w-30"
            src="/assets/brand/logo-3.webp"
            alt="logo-3"
          />
          <img
            className="max-w-30"
            src="/assets/brand/logo-4.webp"
            alt="logo-4"
          />
          <img
            className="max-w-30"
            src="/assets/brand/logo-5.webp"
            alt="logo-5"
          />
        </div>
      </div>
    </section>
  );
}
