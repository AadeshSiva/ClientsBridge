import '../FreelancerReg.css';
import dp from '../../../assets/image/dp.png';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FreelancerProfile = () => {
  const freelancers = useSelector((state) => state.freelancerData); 
  const { id } = useParams();

  const freelancer = freelancers[id - 1]; 

  if (!freelancer) {
    return <p style={{margin:'2em',fontSize:'xx-large'}}>Freelancer not found.</p>;
  }

  const freelancerDetails = [
    { label: 'Name', value: freelancer.name || 'Unknown User' },
    { label: 'User Name', value: freelancer.username || 'N/A' }, 
    { label: 'Email', value: freelancer.email || 'N/A' }, 
    { label: 'Password', value: '*********' }, 
    { label: 'Date of Birth', value: freelancer.dob || 'NaN' }, 
    { label: 'Permanent Address', value: freelancer.permanentAddress || 'N/A' },
    { label: 'Present Address', value: freelancer.presentAddress || 'N/A' },
    { label: 'City', value: freelancer.city || 'N/A' },
    { label: 'Postal Code', value: freelancer.postalCode || 'N/A' },
    { label: 'Country', value: freelancer.country || 'N/A' }
  ];

  return (
    <div className="FreelancerProfile-container">
      <div className="freelancerprodp">
        <img src={freelancer.image || dp} alt="Profile" />
      </div>
      <div className="freelancerprodetails-container">
        {freelancerDetails.map((detail, index) => (
          <div className="freelancerprodetails" key={index}>
            <p className='freelancerprodetails-label'>{detail.label}</p>
            <p className='freelancerprodetails-value'>{detail.value}</p>
          </div>
        ))}
        <div className="freelancerprobtn-con">
          <p className="freelancerprobtn declinebtn">Decline</p>
          <p className="freelancerprobtn acceptbtn">Accept</p>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
