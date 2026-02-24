import { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { RiHistoryLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import HistoryModal from '@/views/Plans/partial/modal/HistoryModal';
import { Tooltip } from 'react-tooltip';
import HistoryModal from '@/views/Plans/partial/modal/HistoryModal';

const Icon = () => {
    const [showLog, setShowLog] = useState(false);
    const handleLogClose = () => setShowLog(false);
    const handleLogShow = () => setShowLog(true);
    return (
        <div className="d-flex align-item-center gap-3">
            <Link to="/card-category" title="Grid View" className="pointer">
                <BsGridFill className="icon-btn text-secondary" size={20} title="Grid View" />
            </Link>
            <Link to="/category-table" title="List View" className="pointer">
                <FaListUl
                    className="icon-btn text-secondary"
                    size={20}
                    title="List View"
                    href="/category-table"
                />
            </Link>

            <div
                className=""
                data-tooltip-id="my-tooltip"
                data-tooltip-content="View History"
                onClick={handleLogShow}
            >
                <RiHistoryLine className="me-2" style={{ fontSize: '24px', cursor: 'pointer' }} />
            </div>
            <Tooltip id="my-tooltip" />
            <HistoryModal show={showLog} handleClose={handleLogClose} />
        </div>
    );
};

export default Icon;
