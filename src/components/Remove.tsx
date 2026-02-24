import Modal from 'react-bootstrap/Modal';
import { IoMdRemoveCircle } from 'react-icons/io';
interface RemoveProps {
    show: boolean;
    onHide: () => void;
}
const Remove = ({ show, onHide }: RemoveProps) => {
    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Remove</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="delete-bg w-auto ps-1 pb-1 p-2">
                        <IoMdRemoveCircle className="delete-icon" size="24" />
                    </div>
                    <div className="">
                        <p className="mb-2">
                            <b>
                                Are you sure you want to <i>remove</i> this ?
                            </b>
                        </p>
                        <div>
                            This item will be removed from your records. If you’re sure, please
                            confirm your decision.
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end gap-3 mt-4">
                    <button className="no-button ps-4 pe-4 mt-3" onClick={onHide}>
                        No, Keep it
                    </button>
                    <button className="button ps-4 pe-4 mt-3">Yes, Remove it</button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Remove;
