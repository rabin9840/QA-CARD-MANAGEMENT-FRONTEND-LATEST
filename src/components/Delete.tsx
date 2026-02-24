import Modal from 'react-bootstrap/Modal';
import { BiSolidTrash } from 'react-icons/bi';
interface DeleteProps {
    show: boolean;
    onHide: () => void;
}
const Delete = ({ show, onHide }: DeleteProps) => {
    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="delete-bg p-2">
                        <BiSolidTrash className="delete-icon" />
                    </div>
                    <div className="">
                        <p className="mb-2">
                            <b>Are you sure you want to delete this ?</b>
                        </p>
                        <div>
                            This action cannot be undone. The item will be permanently deleted and
                            removed from your records. If you’re sure, please confirm your decision.
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end gap-3 mt-4">
                    <button className="no-button ps-4 pe-4 mt-3" onClick={onHide}>
                        No, Keep it
                    </button>
                    <button className="button ps-4 pe-4 mt-3">Yes, Delete it</button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Delete;
