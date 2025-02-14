
const Overview = ({doctor}) => {
    const {about,education,experience,awards,services,specializations

    } = doctor;
    return (
        <div className="grid lg:grid-cols-2 gap-14">
            {/* About Me */}
            <div className="space-y-2 max-w-3xl lg:col-span-2">
            <h1 className="text-xl font-bold">About Me</h1>
            <p> {about} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam commodi esse aperiam repellat, optio vitae nostrum vel eum perspiciatis ut voluptatem aliquam debitis sed aut officia et distinctio explicabo. </p>
            </div>
            {/* Education */}
            <div className="space-y-2 max-w-3xl">
            <h1 className="text-xl font-bold">Education</h1>
            <ul className="ps-10">
            {
                education.map((edu,index) =><li
                key={index}
                className="font-semibold list-disc
"
                >{edu} </li> 
                )
            }
            </ul>
            </div>
            
            {/* Awards */}
            <div className="space-y-2 max-w-3xl ">
            <h1 className="text-xl font-bold">Awards</h1>
            <ul className="ps-10">
            {
                awards.map((award,index) =><li
                key={index}
                className="font-semibold list-disc
"
                >{award} </li> 
                )
            }
            </ul>
            </div>
            {/* Work & Experience */}
            <div className="space-y-2 max-w-3xl">
            <h1 className="text-xl font-bold">Work & Experience</h1>
            <ul className="ps-10">
            {
                experience.map((exp,index) =><li
                key={index}
                className="font-semibold list-disc
"
                >{exp} </li> 
                )
            }
            </ul>
            </div>
            
            {/* Specializations */}
            <div className="space-y-2 max-w-3xl ">
            <h1 className="text-xl font-bold">Specializations</h1>
            <ul className="ps-10">
            {
                specializations.map((specialization,index) =><li
                key={index}
                className="font-semibold list-disc
"
                >{specialization} </li> 
                )
            }
            </ul>
            </div>
            {/* Services */}
            <div className="space-y-2 max-w-3xl">
            <h1 className="text-xl font-bold">Services</h1>
            <ul className="ps-10">
            {
                services.map((service,index) =><li
                key={index}
                className="font-semibold list-disc
"
                >{service} </li> 
                )
            }
            </ul>
            </div>
        </div>
    );
};

export default Overview;