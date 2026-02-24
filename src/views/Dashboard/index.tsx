import React, { useState } from 'react';
import Overview from './partial/Overview';
import BannerImg from '@/assets/images/banner-img.svg';
import Pdf from '@/assets/images/pdf.svg';
import Word from '@/assets/images/word.svg';
import { HiOutlineClock } from 'react-icons/hi';
import { FaEye } from 'react-icons/fa';
import Pagination from '@/components/PaginationIndex';
import RxIcon from '@/assets/icons/cardCategoryIcons/RX-icon.svg';
import { IoCardSharp } from 'react-icons/io5';
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { AiFillFileText } from 'react-icons/ai';
import { FaRectangleList } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
import UploadCardModal from '@/components/UploadCardModal';
import { FiEdit, FiPlus } from 'react-icons/fi';
import { BiSolidTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Edit from '@/views/Card Category/partial/modal/Edit';
import Delete from '@/components/Delete';

interface Category {
    id: string;
    cardName: string;
    totalCards: string;
    icon?: React.ReactNode;
}

const Index: React.FC = () => {
    const categories: Category[] = [
        {
            id: '1',
            icon: <IoCardSharp size={30} className="digital-card" />,
            cardName: 'Digital Cards',
            totalCards: '150',
        },
        {
            id: '2',
            icon: <img src={RxIcon} alt="RX Cards" />,
            cardName: 'RX Formulary',
            totalCards: '150',
        },
        {
            id: '3',
            icon: <FaRectangleList size={30} className="summary-icon" />,
            cardName: 'Summary Of Benefits',
            totalCards: '150',
        },
        {
            id: '4',
            icon: <AiFillFileText size={30} className="claim-doc" />,
            cardName: 'Claim Document',
            totalCards: '150',
        },
        {
            id: '5',
            icon: <IoIosMail size={30} className="welcome-letter" />,
            cardName: 'Welcome Letter',
            totalCards: '150',
        },
        {
            id: '6',
            icon: <BsExclamationTriangleFill size={30} className="terminate-doc" />,
            cardName: 'Termination Document',
            totalCards: '150',
        },
        {
            id: '7',
            icon: <FaRectangleList size={30} className="summary-icon" />,
            cardName: 'Summary Of Benefits',
            totalCards: '150',
        },
        {
            id: '8',
            icon: <AiFillFileText size={30} className="claim-doc" />,
            cardName: 'Claim Document',
            totalCards: '150',
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [showEditCategory, setShowEditCategory] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleDeleteModalShow = () => setShowDeleteModal(true);
    const handleDeleteModalClose = () => setShowDeleteModal(false);

    const handleEditCategoryClose = () => setShowEditCategory(false);
    const handleEditCategoryShow = () => setShowEditCategory(true);

    const handleUpload = () => setShowModal(true);
    const handleUploadClose = () => setShowModal(false);

    const handleFileSelected = (file: File) => {
        console.log(`File has been selected in Header: ${file.name}`);
    };
    const handleCategoryClick = () => {
        navigate('/category-card-list');
    };
    return (
        <div className="page-wrapper">
            <Overview />
            {/* cover image */}
            <div className="hero-section wavy-box">
                <div className="hero-content">
                    <h1>Upload Files Here</h1>
                    <p>
                        Just add your card to the system, and you can start <br />
                        customizing your file if needed.
                    </p>
                    <button
                        className="button d-flex align-items-center gap-1 hero-button"
                        onClick={handleUpload}
                    >
                        <FiPlus className="" />
                        Add New Card
                    </button>
                </div>
                <div className="banner-img">
                    <img src={BannerImg} className="w-100 hero-image" />
                </div>
            </div>

            {/* Recent Activity  */}
            <div className="">
                <div className="header-title mb-3 pb-1 pb-1">Recent Card Activity</div>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <th>Upload Cards</th>
                            <th>Category</th>
                            <th>Plan Counts</th>
                            <th>Uploaded By</th>
                            <th>Status</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex gap-3">
                                        <img src={Pdf} />
                                        <div className="d-flex flex-column gap-1">
                                            <div className="file-name">Registration</div>
                                            <span className="fw-light updated-time">
                                                <HiOutlineClock /> May 21, 2023 | 02:23 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>RX</td>
                                <td>2</td>
                                <td>testtepcts@gmail.com</td>
                                <td>
                                    <div className="active-tag tag d-flex align-items-center">
                                        <div className="active-dot dot"></div>Active
                                    </div>
                                </td>
                                <td className="highlight pointer ">
                                    <Link to="/card-details" className="link">
                                        <FaEye className="me-2" />
                                        View
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={Word} />
                                        <div className="d-flex flex-column gap-1">
                                            <div className="file-name">Registration</div>
                                            <span className="fw-light updated-time">
                                                <HiOutlineClock /> May 21, 2023 | 02:23 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>RX</td>
                                <td>2</td>
                                <td>testtepcts@gmail.com</td>
                                <td>
                                    <div className="pending-tag tag d-flex align-items-center">
                                        <div className="pending-dot dot"></div>Pending
                                    </div>
                                </td>
                                <td className="highlight pointer ">
                                    <Link to="/card-details" className="link">
                                        <FaEye className="me-2" />
                                        View
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex gap-3">
                                        <img src={Pdf} />
                                        <div className="d-flex flex-column gap-1">
                                            <div className="file-name">Registration</div>
                                            <span className="fw-light updated-time">
                                                <HiOutlineClock /> May 21, 2023 | 02:23 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>RX</td>
                                <td>2</td>
                                <td>testtepcts@gmail.com</td>
                                <td>
                                    <div className="inactive-tag tag d-flex align-items-center">
                                        <div className="inactive-dot dot"></div>Inactive
                                    </div>
                                </td>
                                <td className="highlight pointer ">
                                    <Link to="/card-details" className="link">
                                        <FaEye className="me-2" />
                                        View
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex gap-3">
                                        <img src={Pdf} />
                                        <div className="d-flex flex-column gap-1">
                                            <div className="file-name">Registration</div>
                                            <span className="fw-light updated-time">
                                                <HiOutlineClock /> May 21, 2023 | 02:23 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>RX</td>
                                <td>2</td>
                                <td>testtepcts@gmail.com</td>
                                <td>
                                    <div className="active-tag tag d-flex align-items-center">
                                        <div className="active-dot dot"></div>Active
                                    </div>
                                </td>
                                <td className="highlight pointer ">
                                    <Link to="/card-details" className="link">
                                        <FaEye className="me-2" />
                                        View
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex gap-3">
                                        <img src={Word} />
                                        <div className="d-flex flex-column gap-1">
                                            <div className="file-name">Registration</div>
                                            <span className="fw-light updated-time">
                                                <HiOutlineClock /> May 21, 2023 | 02:23 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>RX</td>
                                <td>2</td>
                                <td>testtepcts@gmail.com</td>
                                <td>
                                    <div className="active-tag tag d-flex align-items-center">
                                        <div className="active-dot dot"></div>Active
                                    </div>
                                </td>
                                <td className="highlight pointer ">
                                    <Link to="/card-details" className="link">
                                        <FaEye className="me-2" />
                                        View
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex gap-3">
                                        <img src={Word} />
                                        <div className="d-flex flex-column gap-1">
                                            <div className="file-name">Registration</div>
                                            <span className="fw-light updated-time">
                                                <HiOutlineClock /> May 21, 2023 | 02:23 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>RX</td>
                                <td>2</td>
                                <td>testtepcts@gmail.com</td>
                                <td>
                                    <div className="active-tag tag d-flex align-items-center">
                                        <div className="active-dot dot"></div>Active
                                    </div>
                                </td>
                                <td className="highlight pointer ">
                                    <Link to="/card-details" className="link">
                                        <FaEye className="me-2" />
                                        View
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-3 mb-5">
                <Pagination />
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="header-title pb-1">Card Category</div>
                <div className="highlight pointer">
                    <Link to="/card-category" className="link">
                        View All
                    </Link>
                </div>
            </div>
            {/* Grid View */}
            <div className="d-flex gap-5 flex-wrap">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="category-card-wrapper" // New wrapper for hover effect
                    >
                        <div
                            className="category-icon-wrap"
                            onClick={() => handleCategoryClick()} // Handle click for navigation
                        >
                            <div className="d-flex flex-column align-items-center">
                                <div className="grid-icon shadow-sm rounded mb-2">{cat.icon}</div>
                                <h6 className="h6 mb-1">{cat.cardName}</h6>
                                <small className="text-muted">Total Cards : {cat.totalCards}</small>
                            </div>
                        </div>
                        {/* Overlay with edit and delete options */}
                        <div className="category-overlay">
                            <div className="overlay-content">
                                <button className="overlay-button" onClick={handleEditCategoryShow}>
                                    <FiEdit className="me-1" /> Edit
                                </button>
                                <button className="overlay-button" onClick={handleDeleteModalShow}>
                                    <BiSolidTrash className="me-1" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <UploadCardModal
                show={showModal}
                onClose={handleUploadClose}
                onFileUpload={handleFileSelected}
            />
            <Delete show={showDeleteModal} onHide={handleDeleteModalClose} />
            <Edit show={showEditCategory} onHide={handleEditCategoryClose} />
        </div>
    );
};

export default Index;
