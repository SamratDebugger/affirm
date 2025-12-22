import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="min-h-dvh">
      <div className="max-w-lg mx-auto flex flex-col justify-center items-center py-10">
        <img
          src="/assets/error-404.webp"
          alt="Error Image"
          className="max-w-xs"
        />
        <h1 className="text-4xl font-bold my-8 text-center">
          The page you're looking for cannot be found!
        </h1>
        <Link to="/">
          <button className="btn btn-success">Go to Homepage</button>
        </Link>
      </div>
    </main>
  );
}
