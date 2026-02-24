import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import PaginationIndex from '@/components/PaginationIndex';
import { FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import EditCard from '@/views/Cards/partial/modal/EditCard';
import Delete from '@/components/Delete';
import AssignPlan from '@/views/Cards/partial/modal/AssignPlan';
import { BiSolidTrash } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

function CardsTable() {
    const [showModal, setShowModal] = useState(false);
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [showEditCardModal, setShowEditCardModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleAssignShow = () => setShowAssignModal(true);
    const handleAssignClose = () => setShowAssignModal(false);
    const handleEditCardShow = () => setShowEditCardModal(true);
    const handleEditCardClose = () => setShowEditCardModal(false);

    return (
        <div className="table-responsive pt-3">
            <div className="mb-3">
                <PaginationIndex />
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>
                            {' '}
                            <input type="checkbox" /> Card
                        </th>
                        <th>No of Plan</th>
                        <th>Card Category</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" /> EBA - Smart Health Qualcare
                        </td>
                        <td>5</td>
                        <td>Claim Document</td>
                        <td>
                            <div className="active-tag tag d-flex align-items-center">
                                <div className="active-dot dot"></div>Active
                            </div>
                        </td>
                        <td>May 6, 2025</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="action-dropdown ">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <IoMdAdd className="me-2" size="20" />
                                        <span onClick={handleAssignShow}>Assign Plan</span>{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/card-details">
                                        <FaEye className="me-2" />
                                        View Card
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FiEdit className="me-2" />
                                        <span onClick={handleEditCardShow}>Edit</span>{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        {' '}
                                        <BiSolidTrash className="me-2" />
                                        <span onClick={handleShow}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" /> CIG - General Wellness Plan
                        </td>
                        <td>2</td>
                        <td>Wellness Card</td>
                        <td>
                            <div className="inactive-tag tag d-flex align-items-center">
                                <div className="inactive-dot dot"></div>Inactive
                            </div>
                        </td>
                        <td>April 21, 2025</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="action-dropdown ">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <IoMdAdd className="me-2" />
                                        <span onClick={handleAssignShow}>Assign Plan</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <FaEye className="me-2" />
                                        View Card
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FiEdit className="me-2" />
                                        <span onClick={handleEditCardShow}>Edit</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <BiSolidTrash className="me-2" />
                                        <span onClick={handleShow}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" /> EBA - Smart Health Qualcare
                        </td>
                        <td>5</td>
                        <td>Claim Document</td>
                        <td>
                            <div className="active-tag tag d-flex align-items-center">
                                <div className="active-dot dot"></div>Active
                            </div>
                        </td>
                        <td>May 6, 2025</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="action-dropdown ">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <IoMdAdd className="me-2" />
                                        <span onClick={handleAssignShow}>Assign Plan</span>{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <FaEye className="me-2" />
                                        View Card
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FiEdit className="me-2" />
                                        <span onClick={handleEditCardShow}>Edit</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <BiSolidTrash className="me-2" />
                                        <span onClick={handleShow}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" /> EBA - Smart Health Qualcare
                        </td>
                        <td>5</td>
                        <td>Claim Document</td>
                        <td>
                            <div className="active-tag tag d-flex align-items-center">
                                <div className="active-dot dot"></div>Active
                            </div>
                        </td>
                        <td>May 6, 2025</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="action-dropdown ">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <IoMdAdd className="me-2" />
                                        <span onClick={handleAssignShow}>Assign Plan</span>{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <FaEye className="me-2" />
                                        View Card
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FiEdit className="me-2" />
                                        <span onClick={handleEditCardShow}>Edit</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <BiSolidTrash className="me-2" />
                                        <span onClick={handleShow}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>{' '}
                    <tr>
                        <td>
                            <input type="checkbox" /> EBA - Smart Health Qualcare
                        </td>
                        <td>5</td>
                        <td>Claim Document</td>
                        <td>
                            <div className="active-tag tag d-flex align-items-center">
                                <div className="active-dot dot"></div>Active
                            </div>
                        </td>
                        <td>May 6, 2025</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="action-dropdown ">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <IoMdAdd className="me-2" />
                                        <span onClick={handleAssignShow}>Assign Plan</span>{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <FaEye className="me-2" />
                                        View Card
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FiEdit className="me-2" />
                                        <span onClick={handleEditCardShow}>Edit</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <BiSolidTrash className="me-2" />
                                        <span onClick={handleShow}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>{' '}
                    <tr>
                        <td>
                            <input type="checkbox" /> EBA - Smart Health Qualcare
                        </td>
                        <td>5</td>
                        <td>Claim Document</td>
                        <td>
                            <div className="active-tag tag d-flex align-items-center">
                                <div className="active-dot dot"></div>Active
                            </div>
                        </td>
                        <td>May 6, 2025</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="action-dropdown ">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <IoMdAdd className="me-2" />
                                        <span onClick={handleAssignShow}>Assign Plan</span>{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <FaEye className="me-2" />
                                        View Card
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FiEdit className="me-2" />
                                        <span onClick={handleEditCardShow}>Edit</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <BiSolidTrash className="me-2" />
                                        <span onClick={handleShow}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>{' '}
                    <tr>
                        <td>
                            <input type="checkbox" /> EBA - Smart Health Qualcare
                        </td>
                        <td>5</td>
                        <td>Claim Document</td>
                        <td>
                            <div className="pending-tag tag d-flex align-items-center">
                                <div className="pending-dot dot"></div>Pending
                            </div>
                        </td>
                        <td>May 6, 2025</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="action-dropdown ">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <IoMdAdd className="me-2" />
                                        <span onClick={handleAssignShow}>Assign Plan</span>{' '}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        {' '}
                                        <FaEye className="me-2" />
                                        View Card
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FiEdit className="me-2" />
                                        <span onClick={handleEditCardShow}>Edit</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <BiSolidTrash className="me-2" />
                                        <span onClick={handleShow}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-3">
                <PaginationIndex />
            </div>
            <Delete show={showModal} onHide={handleClose} />
            <AssignPlan show={showAssignModal} onHide={handleAssignClose} />
            <EditCard show={showEditCardModal} onHide={handleEditCardClose} />
        </div>
    );
}

export default CardsTable;
