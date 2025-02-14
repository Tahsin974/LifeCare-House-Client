import banner from "../../../assets/Home-Banner/banner.png";
import ButtonOrange from "../../../Components/ButtonOrange/ButtonOrange";
const HomeBanner = () => {
  return (
    <div id="home" className="hero bg-[#07332F] min-h-screen pt-24 lg:px-20 ">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse  items-center ">
        <figure className="max-w-xl ">
          <img src={banner} className="image-full" />
        </figure>
        <div className="text-white">
          <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold leading-normal	">
            Your Best Medical <br />
            Help Center
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonOrange isWide={true}>All Service</ButtonOrange>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
