const ButtonOrange = ({ children, isWide = false }) => {
  return (
    <>
      {isWide ? (
        <button className="btn lg:btn-wide  bg-orange-600 text-white border-orange-600 hover:bg-orange-700  hover:border-orange-700">
          {children}
        </button>
      ) : (
        <button className="btn   bg-orange-600 text-white border-orange-600 hover:bg-orange-700  hover:border-orange-700">
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonOrange;
