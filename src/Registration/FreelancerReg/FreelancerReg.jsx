import './FreelancerReg.css';
import dp from '../../assets/image/freelancerProfile.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FreelancerReg = () => {
  const freelancers = useSelector((state) => state.freelancerData);

  return (
    <>
      <section className="freelancerreg-container">
        {freelancers && freelancers.length > 0 ? (
          freelancers.map((freelancer, index) => (
            <div className="freelancer-card" key={index}>
              <div className="freelancerdp">
                <img src={freelancer.image || dp} alt={`${freelancer.name}'s profile`} />
              </div>
              <p className="freelancerusername">{freelancer.name}</p>
              <p className="freelancerprofession">{freelancer.role || 'N/A'}</p>
              <Link to={`${freelancer.id}`} className="freelancerviewbtn">View</Link>
            </div>
          ))
        ) : (
          <p>No freelancers available</p>
        )}
        <p style={{ width: '100%', textAlign: 'center', color: 'gray' }}>No more Freelancers to show.</p>
      </section>
    </>
  );
};

export default FreelancerReg;
