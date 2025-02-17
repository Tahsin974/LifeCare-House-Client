const Category = ({
  categories,
  handleCategory,
  selectedCategory,
  colNum = "3",
}) => {
  console.log(colNum);
  return (
    <div>
      <div
        className={` border  grid grid-col-2 lg:grid-cols-${colNum}  items-center gap-2 p-4 my-3`}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategory(category)}
            className={`btn  ${
              category === selectedCategory
                ? "bg-orange-600 text-white border-orange-600 hover:bg-orange-600  hover:border-orange-600"
                : "bg-white text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
