import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { FiPlus } from 'react-icons/fi';
import UploadCardModal from './UploadCardModal';

interface HeaderProps {
    onToggleSidebar: () => void;
}

function Header({ onToggleSidebar }: HeaderProps) {
    const handleMenuClick = () => {
        onToggleSidebar();
    };

    const [showModal, setShowModal] = useState(false);
    const handleUpload = () => setShowModal(true);
    const handleUploadClose = () => setShowModal(false);

    const handleFileSelected = (file: File) => {
        console.log(`File has been selected in Header: ${file.name}`);
    };

    return (
        <header>
            <div className="header">
                <div className="d-flex align-items-center">
                    <div
                        className="hamMenu pe-cursor fs-4 me-2 d-inline-block"
                        onClick={handleMenuClick}
                    >
                        <IoMenuSharp className="hamburger-icon" />
                    </div>
                    <div className="header-text ms-2">
                        Welcome,{' '}
                        <b>
                            <span className="brand-color">Admin</span>
                        </b>
                    </div>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                    <button
                        onClick={handleUpload}
                        className="button d-flex align-items-center gap-1 add-btn"
                    >
                        <FiPlus className="add-icon" size="24px" />
                        Add New Card
                    </button>
                    <div className="d-flex align-items-center gap-2 profile-wrap">
                        <div className="profile">
                            <FaUserCircle className="user-circle" />
                        </div>
                        <div>
                            <div className="fw-medium">Admin Maharjan</div>
                            <div className="fw-light">admin@scoop.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <UploadCardModal
                show={showModal}
                onClose={handleUploadClose}
                onFileUpload={handleFileSelected}
            />
        </header>
    );
}

export default Header;
