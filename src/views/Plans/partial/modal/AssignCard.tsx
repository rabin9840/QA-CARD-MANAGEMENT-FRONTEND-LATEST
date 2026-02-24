import CardDropdown from '@/components/CardDropdown';
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
                    <Modal.Title>Assign Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <label className="mb-0 min-50"> Select Card :</label>
                        <div className="w-100">
                            <CardDropdown />
                        </div>
                    </div>
                    <button className="button w-100">Assign Card</button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Assign;
