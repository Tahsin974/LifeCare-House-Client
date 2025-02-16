const ButtonOutline = ({ children, isWide = false }) => {
  return (
    <div>
      {isWide ? (
        <button className="btn btn-outline lg:w-[22rem] md:w-[18rem]  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600">
          {children}
        </button>
      ) : (
        <button className="btn btn-outline  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600">
          {children}
        </button>
      )}
    </div>
  );
};

export default ButtonOutline;
