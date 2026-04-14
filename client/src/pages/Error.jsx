import { Link, useRouteError } from "react-router-dom";
import image from "../assets/page-error.svg";
const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl font-semibold">Ohh, page is not found!</h3>

          <img src={image} alt="error text" className="max-w-[200px]" />

          <Link
            to="/"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Error page</h1>
      <Link to="/">back home</Link>
      <div className="flex justify-center">
        <img src={image} alt="error text" className="max-w-[200px] w-full" />
      </div>
    </div>
  );
};

export default Error;
