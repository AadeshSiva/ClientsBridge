import { useSelector } from 'react-redux';

import './ClientReg.css'
const ClientReg = () => {
    const freelancers = useSelector((state) => state.freelancerData);
    return (
        <>
            {/* <div className="in">{freelancers.map((freelancer) => (
                <div key={freelancer.id}>
                    <h2>{freelancer.name}</h2>
                    <p>Skills: {freelancer.skills.join(', ')}</p>
                    <p>Location: {freelancer.location}</p>
                </div>
            ))}</div> */}
        </>
    )
}

export default ClientReg
