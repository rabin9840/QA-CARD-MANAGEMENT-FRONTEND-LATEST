import Modal from 'react-bootstrap/Modal';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { useState } from 'react';
import Date from '@/components/Date';
interface ConfirmationProps {
    show: boolean;
    handleClose: () => void;
}
const Confirmation: React.FC<ConfirmationProps> = ({ show, handleClose }) => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex gap-3">
                        <div className="active-tag tag h-100 p-2">
                            <IoCheckmarkCircle className="" size={30} />
                        </div>
                        <div className="">
                            <p className="mb-2">
                                <b>
                                    Are you sure you want to <i className="active-txt"> Enable</i>{' '}
                                    this ?
                                </b>
                            </p>
                            <div>
                                A activation request will be sent to the admin. The card will remain
                                pending until the admin completes the deactivation.
                            </div>
                        </div>
                    </div>
                    <div className="activation-container">
                        <div className="toggle-wrapper d-flex align-items-center gap-1">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={enabled}
                                    onChange={() => setEnabled(!enabled)}
                                />
                                <span className="slider round"></span>
                            </label>

                            {/* Show state text */}
                            <span>{enabled ? 'Activated' : 'Activate Now'}</span>
                        </div>

                        <Date />
                    </div>

                    <div className="d-flex justify-content-end gap-3 mt-4">
                        <button className="no-button ps-4 pe-4 mt-3">No, Keep it</button>
                        <button className="button ps-4 pe-4 mt-3">Yes, Enable it</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Confirmation;
