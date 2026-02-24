import Modal from 'react-bootstrap/Modal';
import { IoIosWarning } from 'react-icons/io';
interface ConfirmationProps {
    show: boolean;
    handleClose: () => void;
}
const Confirmation: React.FC<ConfirmationProps> = ({ show, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex gap-3">
                        <div className="warning-tag tag h-100 p-2">
                            <IoIosWarning className="" size={30} />
                        </div>
                        <div className="">
                            <p className="mb-2">
                                <b>
                                    Are you sure you want to{' '}
                                    <i className="deactivate-txt"> Deactivate</i> this ?
                                </b>
                            </p>
                            <div>
                                A deactivation request will be sent to the admin. The card will
                                remain active until the admin completes the deactivation.vation.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-4">
                        <button className="no-button ps-4 pe-4 mt-3">No, Keep it</button>
                        <button className="button ps-4 pe-4 mt-3">Yes, Deactivate it</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Confirmation;
