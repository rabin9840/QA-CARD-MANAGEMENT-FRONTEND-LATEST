import { useState } from 'react';
import QuickFilter from '@/views/Plans/QuickFilter';
import { FaEye } from 'react-icons/fa';
import PaginationIndex from '@/components/PaginationIndex';
import { Link } from 'react-router-dom';
import PlanDetails from './partial/modal/PlanDetails';
import { Dropdown } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Date from '@/components/Date';
const Index: React.FC = () => {
    const [showDetail, setShowDetail] = useState(false);
    const handleDetailClose = () => setShowDetail(false);
    const handleDetailShow = () => setShowDetail(true);
    // const [date, setDate] = useState("");
    const [selectedStatus, setSelectedStatus] = useState({
        label: 'All',
        value: 'all',
        className: 'all-tag',
        dotClass: 'all-dot',
    });

    const statusOptions = [
        { label: 'All', value: 'all', className: 'all-tag', dotClass: 'all-dot' },
        { label: 'Active', value: 'active', className: 'active-tag', dotClass: 'active-dot' },
        {
            label: 'Assigned',
            value: 'assigned',
            className: 'assigned-tag',
            dotClass: 'assigned-dot',
        },
        {
            label: 'Deactive',
            value: 'inactive',
            className: 'inactive-tag',
            dotClass: 'inactive-dot',
        },
        { label: 'Removed', value: 'removed', className: 'removed-tag', dotClass: 'removed-dot' },
    ];

    const handleSelectStatus = (status: {
        label: string;
        value: string;
        className: string;
        dotClass: string;
    }) => {
        setSelectedStatus(status);
        console.log('Selected status:', status.value);
    };
    return (
        <div>
            <div className="d-flex gap-3 align-items-center mb-3  flex-wrap">
                <div className="form-group-row">
                    <QuickFilter
                        labels={['Plan Id']}
                        placeholders={{
                            'Plan Id': 'Enter Plan Id to filter...',
                        }}
                        onSearch={({ value }) => {
                            console.log('Search term updated to:', value);
                        }}
                        hideDropdown={true}
                    />
                </div>
                <Date />

                <Dropdown>
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-custom-status"
                        className="category-dropdown-toggle"
                    >
                        <div className="d-flex align-items-center justify-content-between gap-2">
                            <div className="d-flex align-items-center gap-2">
                                Status :
                                <div
                                    className={`${selectedStatus.className} tag d-flex align-items-center`}
                                >
                                    <div className={`${selectedStatus.dotClass} dot`}></div>
                                    {selectedStatus.label}
                                </div>
                            </div>
                            <div className="">
                                <MdOutlineKeyboardArrowDown />
                            </div>
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="category-dropdown-menu">
                        {statusOptions.map((option) => (
                            <Dropdown.Item
                                key={option.value} // Use a unique key for each item
                                onClick={() => handleSelectStatus(option)}
                                active={selectedStatus.value === option.value} // Optional: visually mark the active item
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className={`${option.className} tag d-flex align-items-center`}
                                    >
                                        <div className={`${option.dotClass} dot`}></div>
                                        {option.label}
                                    </div>
                                </div>
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="table-responsive">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Plan Id</th>
                            <th>Plan </th>
                            <th>Counts</th>
                            <th>Carrier</th>
                            <th>Plan Status</th>
                            <th>Assigned Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>987445</td>
                            <td>
                                <span
                                    className="plan-name link fw-medium"
                                    onClick={handleDetailShow}
                                >
                                    Ewa Delta Dental Preventative
                                </span>
                            </td>
                            <td>
                                <div className="fw-medium">
                                    Category :<b className="brand-color"> 60</b>
                                </div>
                                <div className="fw-medium">
                                    Cards : <b className="brand-color">180</b>
                                </div>
                            </td>
                            <td>Aetna</td>
                            <td>Attached</td>
                            <td>April 6, 2025</td>
                            <td>
                                {' '}
                                <Link to="/view-cards" className="link">
                                    <FaEye className="me-2" />
                                    View Cards
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-3">
                    <PaginationIndex />
                </div>
            </div>
            <PlanDetails show={showDetail} onHide={handleDetailClose} />
        </div>
    );
};

export default Index;
