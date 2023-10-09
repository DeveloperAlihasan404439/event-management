import { useEffect, useState } from "react";
import { useDataFetch } from "../utilites/DataFetch";
import { getLocalStorage } from "../utilites/LocalStorage";
import ServicesLocal from "../../companent/ServicesLocal/ServicesLocal";

const ServicesSocail = () => {
    const socailData = useDataFetch('/social.json')
    const [local, setLocal] = useState([])
    useEffect(()=>{
        const getLocatData = getLocalStorage()
        if(getLocatData.length>0){
            const data = []
            for(let id of getLocatData){
                const servicesMack = socailData.find(data => data.id === id)
                data.push(servicesMack)
            }
            setLocal(data);
        }
    },[socailData])
    return (
        <div className="pt-20 w-11/12 mx-auto">
            <h1 className="text-center py-8 text-xl md:text-3xl font-medium text-orange-500">Social Services Empowering Communities</h1>
            <p className="text-center text-lg md:text-xl font-medium text-white md:w-1/2 mx-auto">Discover our commitment to building stronger communities through comprehensive social services. We provide vital support, including counseling, housing assistance, and education programs. Together, we can make a positive impact on lives and foster a brighter future for all.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                {
                   local?.map((services, idx) => <ServicesLocal key={idx} services={services}/>) 
                }
            </div>
        </div>
    );
};

export default ServicesSocail;