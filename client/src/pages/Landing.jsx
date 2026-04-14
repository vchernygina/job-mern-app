import { Link } from "react-router-dom";
import image from "../assets/web-development.svg";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-black hover:text-gray-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Job tracking app for modern developers
          </h1>

          <p className="text-gray-600">
            Easily track your job applications, interviews, and offers in one
            place. Stay organized and land your next opportunity faster.
          </p>

          <p className="text-gray-600">
            Built with modern technologies to give you a fast and clean
            experience while managing your job search.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              to="/register"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={image} alt="hero" className="max-w-md w-full" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
