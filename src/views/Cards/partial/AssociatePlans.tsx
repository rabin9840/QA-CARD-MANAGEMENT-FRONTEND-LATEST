import { useState } from 'react';
import PaginationIndex from '@/components/PaginationIndex';
import { BiSolidTrash } from 'react-icons/bi';
import PlanLogo from '@/assets/images/solistic.svg';
import { HiSearch } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';
import Delete from '@/components/Delete';
import AssignPlan from '@/views/Cards/partial/modal/AssignPlan';
import CategoryDropdown from '../../Card Category/partial/CategoryDropdown';

const AssociatePlans = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAssignModal, setShowAssignModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleAssignShow = () => setShowAssignModal(true);
    const handleAssignClose = () => setShowAssignModal(false);
    return (
        <div className="mb-5">
            <div className="d-flex gap-3 justify-content-between flex-wrap">
                <div className="header-title">Associate Plans</div>
                <div className="d-flex gap-3 mb-3 flex-wrap">
                    <div className="input-field pt-1 ps-0 pe-0 pb-0 ">
                        <CategoryDropdown />
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
                    <button className="button d-flex align-items-center">
                        <IoMdAdd className="me-2" />
                        <span onClick={handleAssignShow}>Assign Plan</span>{' '}
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Plan Logo</th>
                            <th>Plan Name</th>
                            <th>Plan Category</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={PlanLogo} />
                            </td>
                            <td>Solstice EPO Dental Elite Plan</td>
                            <td>Dental</td>
                            <td>May 6, 2025</td>
                            <td className="">
                                <BiSolidTrash
                                    className="delete-icon pointer m-3"
                                    size="18"
                                    onClick={handleShow}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={PlanLogo} />
                            </td>
                            <td>Solstice EPO Dental Elite Plan</td>
                            <td>Vision</td>
                            <td>April 21, 2025</td>
                            <td>
                                <BiSolidTrash
                                    className="delete-icon pointer ms-3"
                                    size="18"
                                    onClick={handleShow}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={PlanLogo} />
                            </td>
                            <td>Solstice EPO Dental Elite Plan</td>
                            <td>Dental</td>
                            <td>May 6, 2025</td>
                            <td>
                                <BiSolidTrash
                                    className="delete-icon pointer ms-3"
                                    size="18"
                                    onClick={handleShow}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={PlanLogo} />
                            </td>
                            <td>Solstice EPO Dental Elite Plan</td>
                            <td>Vision</td>
                            <td>May 6, 2025</td>
                            <td>
                                <BiSolidTrash
                                    className="delete-icon pointer ms-3"
                                    size="18"
                                    onClick={handleShow}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={PlanLogo} />
                            </td>
                            <td>Solstice EPO Dental Elite Plan</td>
                            <td>Vision</td>
                            <td>May 6, 2025</td>
                            <td>
                                <BiSolidTrash
                                    className="delete-icon pointer ms-3"
                                    size="18"
                                    onClick={handleShow}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={PlanLogo} />
                            </td>
                            <td>Solstice EPO Dental Elite Plan</td>
                            <td>Dental</td>
                            <td>May 6, 2025</td>
                            <td>
                                <BiSolidTrash
                                    className="delete-icon pointer ms-3"
                                    size="18"
                                    onClick={handleShow}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={PlanLogo} />
                            </td>
                            <td>Solstice EPO Dental Elite Plan</td>
                            <td>Dental</td>
                            <td>May 6, 2025</td>
                            <td>
                                <BiSolidTrash
                                    className="delete-icon pointer ms-3"
                                    size="18"
                                    onClick={handleShow}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-3">
                    <PaginationIndex />
                </div>
            </div>
            <Delete show={showModal} onHide={handleClose} />
            <AssignPlan show={showAssignModal} onHide={handleAssignClose} />
        </div>
    );
};

export default AssociatePlans;
