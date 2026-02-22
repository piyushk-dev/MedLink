import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HospitalDetails from './HospitalDetails';
import Loader from './Loader';
const HospitalPage = () => {
    const { location } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchHospitalData = async () => {
            try {
              const response = await fetch(`http://localhost:4000/hospitals/${location}`);
              const data = await response.json();
              setList(data);
              console.log(data);
            } catch (error) {
                console.error('vivek did this:', error);
            }
        };
        fetchHospitalData();
    }, [location]);

    return list.length===0 ?(<Loader />):(
        <div className="p-4">
            <p className="ml-4 text-lg font-bold">Location: {location}</p>
            <div className="flex flex-wrap">
            {list.map((hospital) => (
                <HospitalDetails key={hospital.id} {...hospital} />
            ))}
            </div>
        </div>
    );
};

export default HospitalPage;
