import '../OrderList.css'

import sm from '../../assets/image/companyicon.svg'
export default function Orders() {
    return (
        <>
            <main className="orderdetails-container">
                <div className="orderdetails-inner">
                    <div className="orderdetail">
                        <p className="orderlabel">Project Title</p>
                        <p className="ordertitle">Project A</p>
                    </div>
                    <div className="orderdetail">
                        <p className="orderlabel">Description</p>
                        <p className="ordervalue">Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Vel, fuga? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam cupiditate nulla libero obcaecati in. Voluptate,
                            repudiandae. Quas veritatis incidunt eum, vitae voluptate odit est
                            quae deleniti sunt nam quaerat quidem.</p>
                    </div>
                    <div className="orderdetails">
                        <p className="orderlabel">Skills Required</p>
                        <p className="ordervalue">React.js, Java, Python, HTML, CSS</p>
                    </div>
                    <div className="orderdetails">
                        <p className="orderlabel">Project scope</p>
                        <p className="ordervalue">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Beatae, excepturi!</p>
                    </div>
                    <div className="orderdetails orderdetailstwo">
                        <div className="orderdetailstwoinner">
                            <p className="orderlabel">Project Timeline</p>
                            <p className="ordervalue">Lorem ipsum dolor sit </p>
                        </div>
                        <div className="orderdetailstwoinner">
                            <p className="orderlabel">Project scope</p>
                            <p className="ordervalue">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className="orderdetails orderdetailstwo">
                        <div className="orderdetailstwoinner">
                            <p className="orderlabel">Budget </p>
                            <p className="ordervalue">$2000</p>
                        </div>
                        <div className="orderdetailstwoinner">
                            <p className="orderlabel">Sale Price</p>
                            <p className="ordervalue">$3000</p>
                        </div>
                    </div>
                    <div className="orderdetail">
                        <p className="orderlabel">Additional Requirements</p>
                        <p className="ordervalue">Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Vel, fuga? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam cupiditate nulla libero obcaecati in. Voluptate,
                            repudiandae. Quas veritatis incidunt eum, vitae voluptate odit est
                            quae deleniti sunt nam quaerat quidem.</p>
                    </div>
                </div>
                <div className="orderdetails-innerimages">
                    <div className="orderbanner"><img src={sm} alt="" /></div>
                    <div className="orderimagesother">
                        <img src={sm} alt="" />
                        <p>thumbnail.png</p>
                    </div>
                    <div className="orderimagesother">
                        <img src={sm} alt="" />
                        <p>wireframe.png</p>
                    </div>
                    <div className="orderbtncon">
                        <p className="orderbtn">Assign</p>
                        <p className="orderbtn">Open Bidding</p>
                        <p className="orderbtn ordercancle">Cancel</p>
                    </div>
                </div>

            </main>
        </>
    )
}