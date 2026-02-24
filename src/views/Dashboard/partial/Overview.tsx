import '../style.css';
import { MdFileCopy } from 'react-icons/md';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';

const Overview = () => {
    return (
        <div className="">
            <div className="header-title mb-3 pb-1">Overview</div>
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="overview-card">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h2 className="fw-medium">145</h2>
                                <p className="sub-text fw-medium mb-0">Total Cards</p>
                            </div>
                            <div className="icon-wrapper icon-total">
                                <MdFileCopy />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="overview-card">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h2 className="fw-medium">326</h2>
                                <p className="sub-text mb-0">Total Active Cards</p>
                            </div>
                            <div className="icon-wrapper icon-total-active">
                                <IoCheckmarkCircle />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="overview-card">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h2 className="fw-medium">145</h2>
                                <p className="sub-text mb-0">Total Pending Cards</p>
                            </div>
                            <div className="icon-wrapper icon-total-pending">
                                <FaClock />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="overview-card">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h2 className="fw-medium">145</h2>
                                <p className="sub-text mb-0">Total Inactive Cards</p>
                            </div>
                            <div className="icon-wrapper icon-total-inactive">
                                <IoIosCloseCircle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
