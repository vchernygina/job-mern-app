import { Link } from "react-router-dom";
import image from "../assets/authentication.svg";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="flex flex-col items-center gap-6">
        <Link to="/">
          <Logo />
        </Link>
        <h4>Please register</h4>

        <img src={image} alt="error text" className="max-w-[100px]" />
        <form className="form">
          <FormRow
            type="email"
            name="email"
            defaultValue="vera.chernygina@gmail.com"
          />
          <FormRow type="password" name="password" defaultValue="secret321" />
          <button type="submit" className="btn">
            Submit
          </button>
          <button type="button" className="btn">
            explore the app
          </button>
        </form>
        <p>
          Already not a member?{" "}
          <Link to="/register" className="link">
            Register page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
