import { Link } from "react-router";
import gif from "../../assets/Error/download.gif";
import ButtonOrange from "../../Components/ButtonOrange/ButtonOrange";
const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-[#011f41]">
      <div className="hero-content text-center">
        <div className="max-w-md space-y-4">
          <img src={gif} alt="" />
          <Link to="/home">
            <ButtonOrange isWide={true}>Back To Home</ButtonOrange>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
