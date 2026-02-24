import React, { useState } from 'react';
import { IoCardSharp } from 'react-icons/io5';
import { FaRectangleList } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { HiSearch } from 'react-icons/hi';
import { BsExclamationTriangleFill, BsFillGrid1X2Fill } from 'react-icons/bs';
import RxIcon from '@/assets/icons/cardCategoryIcons/RX-icon.svg';
import PaginationIndex from '@/components/PaginationIndex';
import AddCategory from './partial/modal/AddCategory';
import Edit from '@/views/Card Category/partial/modal/Edit';
import { BiSolidTrash } from 'react-icons/bi';
import Delete from '@/components/Delete';
import { FiEdit, FiPlus } from 'react-icons/fi';
import Icon from '@/views/Card Category/partial/Icon';
import { useNavigate, Link } from 'react-router-dom';

interface Category {
    id: string;
    cardName: string;
    totalCards: string;
    icon?: React.ReactNode;
}

const CardCategory: React.FC = () => {
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showEditCategory, setShowEditCategory] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleDeleteModalShow = () => setShowDeleteModal(true);
    const handleDeleteModalClose = () => setShowDeleteModal(false);

    const handleEditCategoryClose = () => setShowEditCategory(false);
    const handleEditCategoryShow = () => setShowEditCategory(true);

    const handleAddCategoryClose = () => setShowAddCategory(false);
    const handleAddCategoryShow = () => setShowAddCategory(true);

    const handleCategoryClick = () => {
        navigate('/category-card-list');
    };

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
            icon: <BsFillGrid1X2Fill size={30} className="other-icon" />,
            cardName: 'Others',
            totalCards: '150',
        },
        // Duplicate for demo grid fill
        {
            id: '8',
            icon: <IoCardSharp size={30} className="digital-card" />,
            cardName: 'Digital Cards',
            totalCards: '150',
        },
        {
            id: '9',
            icon: <img src={RxIcon} alt="RX Cards" />,
            cardName: 'RX Formulary',
            totalCards: '150',
        },
        {
            id: '10',
            icon: <FaRectangleList size={30} className="summary-icon" />,
            cardName: 'Summary Of Benefits',
            totalCards: '150',
        },
        {
            id: '11',
            icon: <AiFillFileText size={30} className="claim-doc" />,
            cardName: 'Claim Document',
            totalCards: '150',
        },
        {
            id: '12',
            icon: <IoIosMail size={30} className="welcome-letter" />,
            cardName: 'Welcome Letter',
            totalCards: '150',
        },
        {
            id: '13',
            icon: <BsExclamationTriangleFill size={30} className="terminate-doc" />,
            cardName: 'Termination Document',
            totalCards: '150',
        },
        {
            id: '14',
            icon: <BsFillGrid1X2Fill size={30} className="other-icon" />,
            cardName: 'Others',
            totalCards: '150',
        },
    ];

    return (
        <>
            {/* Header Section */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                {/* Left side */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <h5 className="header-title mb-0">
                        Total Category : <span className="fw-semibold">250</span>
                    </h5>
                    <button
                        className="button mobile-btn d-flex align-items-center gap-1"
                        onClick={handleAddCategoryShow}
                    >
                        <FiPlus className="" /> Add Category
                    </button>
                </div>

                {/* Right side */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <div className="dropdown-input-wrap position-relative">
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

            {/* Grid View */}
            <div className="d-flex gap-5 flex-wrap">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="category-card-wrapper" // New wrapper for hover effect
                    >
                        <div
                            className="category-icon-wrap"
                            onClick={() => handleCategoryClick} // Handle click for navigation
                        >
                            <div className="d-flex flex-column align-items-center">
                                <Link to="/category-card-list">
                                    <div className="grid-icon shadow-sm rounded mb-2">
                                        {cat.icon}
                                    </div>
                                </Link>
                                <h6 className="h6 mb-1">{cat.cardName}</h6>
                                <small className="text-muted">Total Cards : {cat.totalCards}</small>
                                {/* Overlay with edit and delete options */}
                                <div className="category-overlay">
                                    <div className="overlay-content">
                                        {/* <Link to="/category-card-list">
                                    <button className="overlay-button" >
                                        <div className="d-flex flex-column align-items-center" >
                                            <FiEye /> View
                                        </div>
                                    </button>
                                </Link> */}
                                        <button
                                            className="overlay-button"
                                            onClick={handleEditCategoryShow}
                                        >
                                            <div className="">
                                                <FiEdit className="me-1" /> Edit
                                            </div>
                                        </button>
                                        <button
                                            className="overlay-button"
                                            onClick={handleDeleteModalShow}
                                        >
                                            <div className="">
                                                <BiSolidTrash className="me-1" /> Delete
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Section */}
            <div className="mt-4">
                <PaginationIndex />
            </div>
            <Delete show={showDeleteModal} onHide={handleDeleteModalClose} />
            <Edit show={showEditCategory} onHide={handleEditCategoryClose} />
            <AddCategory show={showAddCategory} onHide={handleAddCategoryClose} />
        </>
    );
};

export default CardCategory;
