import { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";

const ServiceSec = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('fake_service.json')
        .then(res=>res.json())
        .then(data=> setService(data))
    },[])
    return (
        <div className="bg-cyan-50 py-16 px-2">
            <div className="container mx-auto">
                <div className="text-center space-y-2">
                    <p className="text-red-400 text-xl font-bold">Service</p>
                    <h2 className="text-4xl font-extrabold">Our Service</h2>
                    <p className="w-full md:w-2/5 mx-auto">
                    We are Dream Trim, a premier destination for exceptional haircuts and styling experience with a passion for perfection
                    </p>
                </div>
                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
                    {
                        service.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceSec;