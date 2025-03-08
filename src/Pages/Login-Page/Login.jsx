import { Link, useNavigate } from "react-router";
import img from "../../assets/SignUp/signUp.png";
import useAuthContext from "../../Context/useAuthContext";
import Swal from "sweetalert2";
import ButtonOrange from "../../Components/ButtonOrange/ButtonOrange";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import moment from "moment";
import { useForm } from "react-hook-form";
const Login = () => {
  const { googleSignUp, setUser, userLogin } = useAuthContext();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userLogin(data.email, data.password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user);
      Swal.fire({
        title: "Login is Successfully Done!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(location.state ? location.state : "/", { replace: true });
    });
  };

  const handleGoogleSignIn = () => {
    googleSignUp().then((result) => {
      const user = result.user;
      const userInfo = {
        email: user.email,
        name: user.displayName,
        date: moment(new Date()).format("YYYY"),
      };
      setUser(user);
      console.log(userInfo);
      axiosPublic
        .post(`/all-users?email=${user.email}`, userInfo)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Sign Up is Successfully Done!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location.state ? location.state : "/", { replace: true });
          } else {
            Swal.fire({
              title: "Sign Up is Successfully Done!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location.state ? location.state : "/", { replace: true });
          }
        });
    });
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 mx-0">
        <div className=" bg-[#07332F] flex justify-center items-center min-h-screen">
          <img
            src={img}
            className="lg:max-w-lg md:max-w-md sm:max-w-sm max-w-xs"
          />
        </div>
        <div className="flex justify-center items-center  ">
          <div className="card border bg-white text-black w-full max-w-sm shrink-0 shadow-2xl m-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body fieldset space-y-3"
            >
              <h1 className="text-2xl font-bold text-center py-3">
                Login to LifeCare House
              </h1>

              <label className="floating-label">
                <span>Your Email</span>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-md w-full"
                  {...register("email")}
                  required
                />
              </label>
              <label className="floating-label">
                <span>Your Password</span>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-md w-full"
                  {...register("password")}
                  required
                />
              </label>

              <ButtonOrange>Login</ButtonOrange>

              <div className="divider">Or</div>

              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-success hover:text-white"
              >
                <FcGoogle size={20} />
                Google
              </button>

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
