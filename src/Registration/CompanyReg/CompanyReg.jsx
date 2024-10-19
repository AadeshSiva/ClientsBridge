import './CompanyReg.css'
import { useSelector } from 'react-redux'
const CompanyReg = () => {
    const companies = useSelector(state => state.companyData)
    return (
        <>
            <section className="companyreg-container">
                <div className="companyreg-tablecon">
                    <table className="companyreg-table">
                        <thead className="companyreg-thead">
                            <tr>
                                <th>Image</th>
                                <th>Company Name</th>
                                <th>Type</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody className="companyreg-tbody">
                            {companies.map((company) => {
                                return (
                                    <tr key={company.id}>
                                        <td><img className='companyreg-img' src={company.image} alt="Company Logo" /></td>
                                        <td>{company.cname}</td>
                                        <td>{company.type}</td>
                                        <td>{company.phone}</td>
                                        <td>{company.email}</td>
                                        <td><span className="companyregviewbtn">View</span></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default CompanyReg
