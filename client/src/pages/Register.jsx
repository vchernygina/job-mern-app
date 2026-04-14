import { Link } from "react-router-dom";
import image from "../assets/online-profile.svg";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="flex flex-col items-center gap-6">
        <Link to="/">
          <Logo />
        </Link>
        <h4>Please register</h4>

        <img src={image} alt="error text" className="max-w-[100px]" />
        <form className="form">
          <FormRow type="text" name="name" defaultValue="vira" />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue="Chernygina"
          />
          <FormRow type="text" name="location" defaultValue="earth" />
          <FormRow
            type="email"
            name="email"
            defaultValue="vera.chernygina@gmail.com"
          />
          <FormRow type="password" name="password" defaultValue="secret321" />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <p>
          Already member?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
