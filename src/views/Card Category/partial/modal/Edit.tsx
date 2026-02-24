import Modal from 'react-bootstrap/Modal';
import { MdImage } from 'react-icons/md';
interface AddCategoryProps {
    show: boolean;
    onHide: () => void;
}

const AddCategory = ({ show, onHide }: AddCategoryProps) => {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center gap-2 w-100 modal-form mb-4">
                        <label className="mb-0"> Category Name :</label>
                        <input
                            className="select-option input-field w-50"
                            placeholder="   EPO Dental Elite Plan"
                        />
                    </div>
                    <div className="modal-form">
                        <label className="mb-2 pb-1">Choose Icon</label>
                        <br />
                        <div className="d-flex gap-3">
                            <div className="icon-holder">
                                <MdImage size={20} />
                            </div>
                            <button className="button choose-file">Choose File</button>
                        </div>
                    </div>
                    <button className="button w-100 mt-3">Edit Category</button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddCategory;
