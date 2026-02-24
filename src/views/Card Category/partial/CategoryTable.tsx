import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import PaginationIndex from '@/components/PaginationIndex';
import { BsExclamationTriangleFill, BsFillGrid1X2Fill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoCardSharp } from 'react-icons/io5';
import { AiFillFileText } from 'react-icons/ai';
import { FaRectangleList } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '@/views/Card Category/partial/modal/Edit';
import { FiEdit, FiPlus } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { BiSolidTrash } from 'react-icons/bi';
import Delete from '@/components/Delete';
import '../style.css';
import AddCategory from './modal/AddCategory';
import Icon from '@/views/Card Category/partial/Icon';
const CategoryTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [showEditCategory, setShowEditCategory] = useState(false);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleEditCategoryClose = () => setShowEditCategory(false);
    const handleAddCategoryClose = () => setShowAddCategory(false);

    const handleEditCategoryShow = () => setShowEditCategory(true);
    const handleAddCategoryShow = () => setShowAddCategory(true);

    return (
        <div>
            {/* Header Section */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                {/* Left side */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <h5 className="header-title mb-0">
                        Total Category : <span className="fw-semibold">250</span>
                    </h5>
                    <button
                        className="button mobile-btn d-flex align-items-center gap-2"
                        onClick={handleAddCategoryShow}
                    >
                        <FiPlus /> Add Category
                    </button>
                </div>

                {/* Right side */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
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

                    {/* View Icons */}
                    <Icon />
                </div>
            </div>
            <div className="mb-3">
                <PaginationIndex />
            </div>
            <div className="table-responsive">
                <table className="data-table category-tbl">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Category</th>
                            <th>Total Card</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="">
                                <IoCardSharp size={24} className="digital-card me-2" />
                                Digital Cards
                            </td>
                            <td>45</td>
                            <td>18</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="/category-card-list"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FaEye className="me-2" /> View
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FiEdit className="me-2" /> Edit
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={handleShow}>
                                            <div className="d-flex align-items-center">
                                                <BiSolidTrash className="me-2" />
                                                Delete
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="">
                                <FaRectangleList size={24} className="summary-icon me-2" />
                                Summary of benefits
                            </td>
                            <td>22</td>
                            <td>42</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="/category-card-list"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FaEye className="me-2" /> View
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FiEdit className="me-2" /> Edit
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={handleShow}>
                                            <div className="d-flex align-items-center">
                                                <BiSolidTrash className="me-2" />
                                                Delete
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="">
                                <IoIosMail size={24} className="welcome-letter me-2" />
                                Welcome Letter
                            </td>
                            <td>45</td>
                            <td>68</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="/category-card-list"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FaEye className="me-2" /> View
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FiEdit className="me-2" /> Edit
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={handleShow}>
                                            <div className="d-flex align-items-center">
                                                <BiSolidTrash className="me-2" />
                                                Delete
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="">
                                <AiFillFileText size={24} className="claim-doc me-2" />
                                Claim document
                            </td>
                            <td>22</td>
                            <td>55</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="/category-card-list"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FaEye className="me-2" /> View
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FiEdit className="me-2" /> Edit
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={handleShow}>
                                            <div className="d-flex align-items-center">
                                                <BiSolidTrash className="me-2" />
                                                Delete
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className="">
                                <BsExclamationTriangleFill
                                    size={24}
                                    className="terminate-doc me-2"
                                />
                                Termination document
                            </td>
                            <td>22</td>
                            <td>38</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="/category-card-list"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FaEye className="me-2" /> View
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FiEdit className="me-2" /> Edit
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={handleShow}>
                                            <div className="d-flex align-items-center">
                                                <BiSolidTrash className="me-2" />
                                                Delete
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td className="">
                                <IoCardSharp size={24} className="digital-card me-2" />
                                Digital Cards
                            </td>
                            <td>45</td>
                            <td>30</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="/category-card-list"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FaEye className="me-2" /> View
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FiEdit className="me-2" /> Edit
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={handleShow}>
                                            <div className="d-flex align-items-center">
                                                <BiSolidTrash className="me-2" />
                                                Delete
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td className="">
                                <BsFillGrid1X2Fill size={24} className="other-icon me-2" />
                                Others
                            </td>
                            <td>45</td>
                            <td>28</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="/category-card-list"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FaEye className="me-2" /> View
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="d-flex align-items-center">
                                                <FiEdit className="me-2" /> Edit
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={handleShow}>
                                            <div className="d-flex align-items-center">
                                                <BiSolidTrash className="me-2" />
                                                Delete
                                            </div>
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
            </div>
            <Delete show={showModal} onHide={handleClose} />
            <Edit show={showEditCategory} onHide={handleEditCategoryClose} />
            <AddCategory show={showAddCategory} onHide={handleAddCategoryClose} />
        </div>
    );
};

export default CategoryTable;
