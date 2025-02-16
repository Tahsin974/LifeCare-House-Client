import { Link } from "react-router";

const PageTitle = ({ pageName }) => {
  return (
    <div className="hero  bg-[#07332F] py-32 text-white ">
      <div className="hero-content text-left justify-start">
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold capitalize">
            {pageName}
          </h1>
          <p className="py-4 capitalize">
            <Link to="/home" className="hover:link">
              home
            </Link>{" "}
            / {pageName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
