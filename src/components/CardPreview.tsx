import { Modal } from 'react-bootstrap';
import File from '@/assets/images/solistic.svg';
import Pdf from '@/assets/images/pdf.svg';

interface CardPreviewModalProps {
    show: boolean;
    handleClose: () => void;
    fileUrl: string;
    title: string;
    status: string;
    lastModified: string;
    duration: string;
}

const CardPreviewModal: React.FC<CardPreviewModalProps> = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} size="xl" centered>
            <Modal.Header closeButton>
                <Modal.Title>Card Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card-preview-body">
                    <div className="preview-left">
                        <img src={File} alt="Preview" className="preview-image" />
                    </div>
                    <div className="preview-right ">
                        <div className="d-flex gap-3">
                            <img src={Pdf} />
                            <div className="d-flex flex-column gap-1 f-14">
                                EBA - Smart Health Qualcare <br />
                                <span className="fw-light f-14">May 21, 2023 | 02:23 PM</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="active-tag tag d-flex align-items-center">
                                <div className="active-dot dot"></div>Active
                            </div>
                            <div className="f-14">Duration : May 24 , 2025 - Present</div>
                        </div>
                        <hr />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CardPreviewModal;
