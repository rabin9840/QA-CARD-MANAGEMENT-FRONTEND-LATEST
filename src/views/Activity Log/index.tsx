import { HiSearch } from 'react-icons/hi';
import StatusDropdown from '@/components/StatusDropdown';
import './style.css';
const index = () => {
    return (
        <div>
            <div className="d-flex gap-3 mb-3 flex-wrap">
                <div className="d-flex align-items-center">
                    <label className="bg-status">Status :</label>
                    <StatusDropdown />
                </div>
                <div className="dropdown-input-wrap  position-relative">
                    <input
                        type="text"
                        className="dropdown-input pe-5 input-field h-100"
                        placeholder="Search"
                    />
                    <HiSearch
                        className="fa fa-search position-absolute text-muted"
                        style={{
                            top: '50%',
                            right: '1rem',
                            transform: 'translateY(-50%)',
                            pointerEvents: 'none',
                        }}
                    />
                </div>
            </div>
            <div className="header-title mb-4">Today</div>
            <div className="row">
                <div className="col-md-8">
                    <ul className="activity-list">
                        <li className="activity-item">
                            <img
                                className="activity-avatar"
                                src="https://i.pravatar.cc/88?u=admin"
                                alt="Admin avatar"
                            />
                            <div className="detail">
                                <div className="">
                                    <p className="activity-text">
                                        <strong>Admin Maharjan </strong>
                                        <strong>
                                            <em>activated </em>
                                        </strong>
                                        the <br />
                                        “Solistic Dental ” to “EBA - Smart Health Qualcare”
                                    </p>
                                </div>
                                <div className="pad-5">
                                    <span className="activity-date">Jun 20 , 2025</span>
                                </div>
                            </div>
                        </li>
                        <li className="activity-item">
                            <img
                                className="activity-avatar"
                                src="https://i.pravatar.cc/88?u=admin"
                                alt="Admin avatar"
                            />
                            <div className="detail">
                                <div className="">
                                    <p className="activity-text">
                                        <strong>Admin Maharjan </strong>
                                        <strong>
                                            <em>activated </em>
                                        </strong>
                                        the <br />
                                        “Solistic Dental ” to “EBA - Smart Health Qualcare”
                                    </p>
                                </div>
                                <div className="pad-5">
                                    <span className="activity-date">Jun 20 , 2025</span>
                                </div>
                            </div>
                        </li>
                        <li className="activity-item">
                            <img
                                className="activity-avatar"
                                src="https://i.pravatar.cc/88?u=john"
                                alt="John Kumar Shrestha avatar"
                            />
                            <div className="detail">
                                <div className="">
                                    <p className="activity-text">
                                        <strong>John Kumar </strong>
                                        <strong>
                                            <em>deactivated </em>
                                        </strong>
                                        the <br />
                                        “Solistic Dental ” to “EBA - Smart Health Qualcare”
                                    </p>
                                </div>
                                <div className="pad-5">
                                    <span className="activity-date">Jun 20 , 2025</span>
                                </div>
                            </div>
                        </li>
                        <li className="activity-item">
                            <img
                                className="activity-avatar"
                                src="https://i.pravatar.cc/88?u=admin"
                                alt="Rabi Kumar Shrestha avatar"
                            />
                            <div className="detail">
                                <div className="">
                                    <p className="activity-text">
                                        <strong>John Kumar </strong>
                                        <strong>
                                            <em>deactivated </em>
                                        </strong>
                                        the <br />
                                        “Solistic Dental ” to “EBA - Smart Health Qualcare”
                                    </p>
                                </div>
                                <div className="pad-5">
                                    <span className="activity-date">Jun 20 , 2025</span>
                                </div>
                            </div>
                        </li>
                        <li className="activity-item">
                            <img
                                className="activity-avatar"
                                src="https://i.pravatar.cc/88?u=john"
                                alt="John Kumar Shrestha avatar"
                            />
                            <div className="detail">
                                <div className="">
                                    <p className="activity-text">
                                        <strong>John Kumar </strong>
                                        <strong>
                                            <em>deactivated </em>
                                        </strong>
                                        the <br />
                                        “Solistic Dental ” to “EBA - Smart Health Qualcare”
                                    </p>
                                </div>
                                <div className="pad-5">
                                    <span className="activity-date">Jun 20 , 2025</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="header-title mb-4">Yesterday</div>
            <div className="">
                <ul className="activity-list">
                    <li className="activity-item">
                        <img
                            className="activity-avatar"
                            src="https://i.pravatar.cc/88?u=admin"
                            alt="Admin avatar"
                        />
                        <div className="detail">
                            <div className="">
                                <p className="activity-text">
                                    <strong>Admin Maharjan </strong>
                                    <strong>
                                        <em>activated </em>
                                    </strong>
                                    the <br />
                                    “Solistic Dental ” to “EBA - Smart Health Qualcare”
                                </p>
                            </div>
                            <div className="pad-5">
                                <span className="activity-date">Jun 20 , 2025</span>
                            </div>
                        </div>
                    </li>
                    <li className="activity-item">
                        <img
                            className="activity-avatar"
                            src="https://i.pravatar.cc/88?u=john"
                            alt="John Kumar Shrestha avatar"
                        />
                        <div className="detail">
                            <div className="">
                                <p className="activity-text">
                                    <strong>John Kumar </strong>
                                    <strong>
                                        <em>deactivated </em>
                                    </strong>
                                    the <br />
                                    “Solistic Dental ” to “EBA - Smart Health Qualcare”
                                </p>
                            </div>
                            <div className="pad-5">
                                <span className="activity-date">Jun 20 , 2025</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default index;
