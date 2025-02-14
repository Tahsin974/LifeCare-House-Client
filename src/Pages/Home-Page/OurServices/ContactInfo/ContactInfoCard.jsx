
const ContactInfoCard = ({icon,color,children}) => {
    return (
        <div>
            <div className={` bg-${color} flex items-center shadow-xl py-6 lg:px-14 px-5 text-white rounded-lg`}>
        <figure>
        {icon}
        </figure>
      <div className="card-body ">
      {children}
      </div>
    </div>
        </div>
    );
};

export default ContactInfoCard;