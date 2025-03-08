import { Link, useNavigate } from "react-router";
import img from "../../../assets/SignUp/signUp.png";
import ButtonOrange from "../../../Components/ButtonOrange/ButtonOrange";
import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../../Context/useAuthContext";
import Swal from "sweetalert2";
import moment from "moment";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import axios from "axios";
const SignUp = () => {
  const { googleSignUp, setUser, createUser, updateUser, setLoading, user } =
    useAuthContext();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const result = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    if (result.data.success) {
      createUser(data.email, data.password).then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setLoading(false);
        updateUser(data.name, result.data.data.url).then(() => {
          const userInfo = {
            email: user.email,
            name: user.displayName,
            date: moment(new Date()).format("YYYY"),
          };
          setUser(user);
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
                navigate(location.state ? location.state : "/", {
                  replace: true,
                });
              } else {
                Swal.fire({
                  title: "Sign In is Successfully Done!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(location.state ? location.state : "/", {
                  replace: true,
                });
              }
            });
        });
      });
    }
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
              title: "Sign In is Successfully Done!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location.state ? location.state : "/", { replace: true });
          }
        });
    });
  };

  console.log(user);
  return (
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
              Sign Up to LifeCare House
            </h1>
            <label className="floating-label">
              <span>Your Name</span>
              <input
                type="text"
                placeholder="name"
                className="input input-md w-full"
                {...register("name", { maxLength: 20 })}
                required
              />
            </label>
            <label className="floating-label">
              <span>Your Email</span>
              <input
                type="email"
                placeholder="email"
                className="input input-md w-full"
                name="email"
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
            <input
              type="file"
              className="file-input file-input-neutral"
              {...register("image")}
              required
            />

            <ButtonOrange>Create Account</ButtonOrange>
            <div className="divider">Or</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-success hover:text-white"
            >
              <FcGoogle size={20} />
              Google
            </button>
            <p className="text-center py-4">
              Already registered? Go to{" "}
              <Link to="/login" className="text-orange-600 font-bold">
                SIGN IN
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
