import CategoryDropdown from '@/views/Card Category/partial/CategoryDropdown';
import Modal from 'react-bootstrap/Modal';
import StatusDropdown from '@/components/StatusDropdown';
interface EditCardProps {
    show: boolean;
    onHide: () => void;
}
const EditCard = ({ show, onHide }: EditCardProps) => {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-2 fw-medium">Card Information</div>
                    <div className="d-flex align-items-center gap-2 w-100 modal-form mb-3">
                        <label className="mb-0"> Card Name :</label>
                        <input
                            type="text"
                            placeholder="EBA - Smart Health Qualcare "
                            className="input-field"
                        />
                    </div>
                    <div className="d-flex align-items-center gap-2 w-100 modal-form mb-3">
                        <label className="mb-0"> Card Category :</label>
                        <CategoryDropdown />
                    </div>
                    <div className="d-flex align-items-center gap-2 w-100 modal-form mb-3 ">
                        <label className="mb-0">Status :</label>
                        <div className="input-field d-flex align-items-center">
                            <div className="">Status:</div>
                            <StatusDropdown />
                        </div>
                    </div>
                    <button className="button w-100 mt-2">Update</button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default EditCard;
