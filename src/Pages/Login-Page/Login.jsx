import { Link, useNavigate } from "react-router";
import img from "../../assets/SignUp/signUp.png";
import useAuthContext from "../../Context/useAuthContext";
import Swal from "sweetalert2";
import ButtonOrange from "../../Components/ButtonOrange/ButtonOrange";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router";
const Login = () => {
  const { googleSignUp, setUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const handleGoogleSignIn = () => {
    googleSignUp().then((result) => {
      const user = result.user;
      setUser(user);
      Swal.fire({
        title: "Sign Up is Successfully Done!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(location.state ? location.state : "/", { replace: true });
    });
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 mx-0">
        <div className=" bg-[#07332F] flex justify-center items-center">
          <img
            src={img}
            className="lg:max-w-lg md:max-w-md sm:max-w-sm max-w-xs"
          />
        </div>
        <div className="flex justify-center items-center  ">
          <div className="card border bg-white text-black w-full max-w-sm shrink-0 shadow-2xl m-20">
            <form className="card-body">
              <h1 className="text-2xl font-bold text-center py-3">
                Login to LifeCare House
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <ButtonOrange>Login</ButtonOrange>
              </div>
              <div className="divider">Or</div>
              <div className="form-control">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-success hover:text-white"
                >
                  <FcGoogle size={20} />
                  Google
                </button>
              </div>
              <p className="text-center py-4">
                Not registered? Go to{" "}
                <Link to="/sign-up" className="text-orange-600 font-bold">
                  SIGN UP
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
