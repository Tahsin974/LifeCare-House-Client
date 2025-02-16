import { Link } from "react-router";
import gif from "../../assets/Error/error.png";
import ButtonOrange from "../../Components/ButtonOrange/ButtonOrange";
const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-white items-center">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold mb-3">Sorry,</h1>
          <p className="text-xl text-gray-500 ">This page is not found.</p>

          <img src={gif} alt="" className="my-7 max-w-xl" />

          <Link to="/home">
            <ButtonOrange isWide={true}>Back To Home</ButtonOrange>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
