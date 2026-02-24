import PlanDropdown from '@/components/PlanDropdown';
import Modal from 'react-bootstrap/Modal';
interface AssignProps {
    show: boolean;
    onHide: () => void;
}

const Assign = ({ show, onHide }: AssignProps) => {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Assign Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center gap-2 w-100 modal-form mb-4">
                        <label className="mb-0"> Select Plan :</label>
                        <PlanDropdown />
                    </div>
                    <button className="button w-100 mt-3">Assign Plan</button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Assign;
