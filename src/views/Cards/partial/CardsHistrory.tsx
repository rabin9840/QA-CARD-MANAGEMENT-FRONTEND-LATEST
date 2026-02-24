import { useState } from 'react';
import Pdf from '@/assets/images/pdf.svg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import CardPreviewModal from '@/components/CardPreview';
import Confirmation from '@/components/Confirmation';
import Warning from '@/components/Warning';
const CardsHistory = () => {
    const [showPreview, setShowPreview] = useState(false);
    const handlePreviewClose = () => setShowPreview(false);
    const handlePreviewShow = () => setShowPreview(true);
    const [showEnable, setShowEnable] = useState(false);
    const [showDisable, setShowDisable] = useState(false);

    const handleEnableClose = () => setShowEnable(false);
    const handleEnableShow = () => setShowEnable(true);

    const handleDisableClose = () => setShowDisable(false);
    const handleDisableShow = () => setShowDisable(true);
    return (
        <div>
            <div className="header-title mb-3 pb-1">Card History</div>
            <div className="table-responsive card-history-table">
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
                                <div className="d-flex gap-3 align-items-center  flex-wrap">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                        Last Modified : May 24 , 2025
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
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleDisableShow}
                                        >
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <HiOutlineDownload className="me-2" />
                                            Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                        Last Modified : May 24 , 2025
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
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleDisableShow}
                                        >
                                            <IoCheckmarkCircle className="me-2" />
                                            Disable
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <HiOutlineDownload className="me-2" />
                                            Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                        Last Modified : May 24 , 2025
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
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleDisableShow}
                                        >
                                            <IoCheckmarkCircle className="me-2" />
                                            Disable
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <HiOutlineDownload className="me-2" />
                                            Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                        Last Modified : May 24 , 2025
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="active-tag tag d-flex align-items-center">
                                    <div className="active-dot dot"></div>Active
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
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleDisableShow}
                                        >
                                            {' '}
                                            <IoCheckmarkCircle className="me-2" />
                                            Disable
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <HiOutlineDownload className="me-2" />
                                            Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                        Last Modified : May 24 , 2025
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
                                        <Dropdown.Item href="#/action-1" onClick={handleEnableShow}>
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <HiOutlineDownload className="me-2" />
                                            Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                        Last Modified : May 24 , 2025
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
                                            Disable
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <HiOutlineDownload className="me-2" />
                                            Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex gap-3">
                                    <img src={Pdf} />
                                    <div className="">
                                        EBA - Smart Health Qualcare <br />
                                        Last Modified : May 24 , 2025
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
                                        <Dropdown.Item
                                            href="#/action-1"
                                            onClick={handleDisableShow}
                                        >
                                            <IoCheckmarkCircle className="me-2" />
                                            Enable
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#/action-2"
                                            onClick={handlePreviewShow}
                                        >
                                            {' '}
                                            <FaEye className="me-2" />
                                            Preview Card
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <HiOutlineDownload className="me-2" />
                                            Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
        </div>
    );
};

export default CardsHistory;
