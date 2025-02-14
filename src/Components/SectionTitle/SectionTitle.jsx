const SectionTitle = ({ heading, subTitle, subHeading }) => {
  return (
    <div className="text-center max-w-4xl mx-auto my-5">
      <p className="pb-3 text-orange-500">{subHeading}</p>
      <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold">{heading}</h1>

      <p className="py-6">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
