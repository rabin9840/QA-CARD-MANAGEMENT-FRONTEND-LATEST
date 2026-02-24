import { useState } from 'react';
import Pdf from '@/assets/images/pdf.svg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import PaginationIndex from '@/components/PaginationIndex';
import { IoIosRemoveCircle } from 'react-icons/io';
import { RiHistoryLine } from 'react-icons/ri';
import { HiSearch } from 'react-icons/hi';
import { Tooltip } from 'react-tooltip';
import HistoryModal from '@/views/Plans/partial/modal/HistoryModal';
import Remove from '@/components/Remove';
import CardPreviewModal from '@/components/CardPreview';
import Confirmation from '@/components/Confirmation';
import Warning from '@/components/Warning';
import AssignCard from '@/views/Plans/partial/modal/AssignCard';
import CategoryDropdown from '@/views/Card Category/partial/CategoryDropdown';

const PlanCardList = () => {
    const [showLog, setShowLog] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [showEnable, setShowEnable] = useState(false);
    const [showDisable, setShowDisable] = useState(false);
    const [showAssignCard, setShowAssignCard] = useState(false);

    const handleLogClose = () => setShowLog(false);
    const handleLogShow = () => setShowLog(true);

    const handleRemoveClose = () => setShowRemove(false);
    const handleRemoveShow = () => setShowRemove(true);

    const handlePreviewClose = () => setShowPreview(false);
    const handlePreviewShow = () => setShowPreview(true);

    const handleEnableClose = () => setShowEnable(false);
    const handleEnableShow = () => setShowEnable(true);

    const handleDisableClose = () => setShowDisable(false);
    const handleDisableShow = () => setShowDisable(true);
    const handleAssignCardShow = () => setShowAssignCard(true);
    const handleAssignCardClose = () => setShowAssignCard(false);
    return (
        <div>
            <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                <div className="header-title">Ewa Delta Dental Preventative</div>
                <button
                    className="button d-flex align-items-center "
                    onClick={handleAssignCardShow}
                >
                    <IoMdAdd className="me-2" />
                    Assign Card
                </button>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                <div className="">
                    Total Cards : <b>50</b>{' '}
                </div>
                <div className="d-flex gap-2 flex-wrap">
                    <div className="input-field p-1">
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
                    <div
                        className="history-icon-wrapper"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="View History"
                        onClick={handleLogShow}
                    >
                        <RiHistoryLine
                            className="me-2 mt-2"
                            style={{ fontSize: '24px', cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <PaginationIndex />
            </div>
            <div className="table-responsive">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Cards</th>
                            <th>Status</th>
                            <th>Service Period</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex gap-3 al align-items-center">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="inactive-tag tag d-flex align-items-center">
                                    <div className="inactive-dot dot"></div>Inactive
                                </div>
                            </td>
                            <td>May 24 , 2025 - Present</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={handleEnableShow}>
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable{' '}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogShow}>
                                            {' '}
                                            <RiHistoryLine className="me-2" />
                                            View History
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-4" onClick={handleRemoveShow}>
                                            <IoIosRemoveCircle className="me-2" /> Remove Card
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3 al">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="inactive-tag tag d-flex align-items-center">
                                    <div className="inactive-dot dot"></div>Inactive
                                </div>
                            </td>
                            <td>Jun 25 , 2025</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={handleEnableShow}>
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable{' '}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogShow}>
                                            {' '}
                                            <RiHistoryLine className="me-2" />
                                            View History
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-4" onClick={handleRemoveShow}>
                                            <IoIosRemoveCircle className="me-2" /> Remove Card
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3 al">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="inactive-tag tag d-flex align-items-center">
                                    <div className="inactive-dot dot"></div>Inactive
                                </div>
                            </td>
                            <td>Aug 15 , 2024 - Jan 12, 2025</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={handleEnableShow}>
                                            <IoCheckmarkCircle className="me-2" />
                                            Disable{' '}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogShow}>
                                            {' '}
                                            <RiHistoryLine className="me-2" />
                                            View History
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-4" onClick={handleRemoveShow}>
                                            <IoIosRemoveCircle className="me-2" /> Remove Card
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3 al">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="inactive-tag tag d-flex align-items-center">
                                    <div className="inactive-dot dot"></div>Inactive
                                </div>
                            </td>
                            <td>Jan 2 , 2024 - Aug 15 , 2024</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={handleEnableShow}>
                                            {' '}
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable{' '}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogShow}>
                                            {' '}
                                            <RiHistoryLine className="me-2" />
                                            View History
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-4" onClick={handleRemoveShow}>
                                            <IoIosRemoveCircle className="me-2" /> Remove Card
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3 al">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="active-tag tag d-flex align-items-center">
                                    <div className="active-dot dot"></div>Active
                                </div>
                            </td>
                            <td>May 24 , 2025 - Present</td>
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
                                            href="#/action-1"
                                            onClick={handleDisableShow}
                                        >
                                            <IoCheckmarkCircle className="me-2" />
                                            Disable{' '}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogShow}>
                                            {' '}
                                            <RiHistoryLine className="me-2" />
                                            View History
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-4" onClick={handleRemoveShow}>
                                            <IoIosRemoveCircle className="me-2" /> Remove Card
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3 al">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="inactive-tag tag d-flex align-items-center">
                                    <div className="inactive-dot dot"></div>Inactive
                                </div>
                            </td>
                            <td>May 24 , 2025 - Present</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={handleEnableShow}>
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable{' '}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogShow}>
                                            {' '}
                                            <RiHistoryLine className="me-2" />
                                            View History
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-4" onClick={handleRemoveShow}>
                                            <IoIosRemoveCircle className="me-2" /> Remove Card
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3 al">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="inactive-tag tag d-flex align-items-center">
                                    <div className="inactive-dot dot"></div>Inactive
                                </div>
                            </td>
                            <td>May 24 , 2025 - Present</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="action-dropdown "
                                    >
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={handleEnableShow}>
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable{' '}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={handleLogShow}>
                                            {' '}
                                            <RiHistoryLine className="me-2" />
                                            View History
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-4" onClick={handleRemoveShow}>
                                            <IoIosRemoveCircle className="me-2" /> Remove Card
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <PaginationIndex />
            </div>
            <Tooltip id="my-tooltip" />
            <HistoryModal show={showLog} handleClose={handleLogClose} />
            <Remove show={showRemove} onHide={handleRemoveClose} />
            <CardPreviewModal
                show={showPreview}
                handleClose={handlePreviewClose}
                fileUrl="/sample-card.png"
                title="EBA - Smart Health Qualcare"
                status="Active"
                lastModified="May 24, 2025"
                duration="May 24, 2025 – Present"
            />
            <Confirmation show={showEnable} handleClose={handleEnableClose} />
            <Warning show={showDisable} handleClose={handleDisableClose} />
            <AssignCard show={showAssignCard} onHide={handleAssignCardClose} />
        </div>
    );
};

export default PlanCardList;
