const ServiceCard = ({ service }) => {
  const { serviceName, serviceDetails, image } = service;
  return (
    <div>
      <div className="card bg-white text-black ">
        <figure>
          <img src={image} alt="service image" className="image-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p> {serviceDetails} </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
