const CardInfo = () => {
    return (
        <div>
            <div className="header-title mb-3 pb-1">Card Info</div>
            {/* card info */}
            <div className="card-info mb-5">
                <div className="row">
                    <div className="col-md-4">
                        <p className="mb-3 fw-medium">Created By</p>
                        <ul>
                            <li>
                                Email:{' '}
                                <span className="card-info-detail">testrepcts@gmail.com</span>
                            </li>
                            <li>
                                Date: <span className="card-info-detail">Jan 15, 2024</span>
                            </li>
                            <li className="pb-0 card-info-detail">
                                Updated : <span>June 25, 2025</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <p className="mb-3 fw-medium">Card Information</p>
                        <ul>
                            <li className="d-flex gap-2">
                                Card Name :{' '}
                                <div>
                                    <span className="card-info-detail">
                                        EBA - Smart Health Qualcare
                                    </span>{' '}
                                </div>
                            </li>
                            <li className="d-flex gap-2">
                                Card Category :{' '}
                                <div className="plan-chip w-auto  ">
                                    <span className="card-info-detail">Claim Document</span>
                                </div>
                            </li>
                            <li className="d-flex gap-2 pb-0">
                                Status :
                                <div className="active-tag tag d-flex align-items-center">
                                    <div className="active-dot dot"></div>Active
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
