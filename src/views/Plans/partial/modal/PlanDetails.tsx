import Modal from 'react-bootstrap/Modal';
interface PlanDetailsProps {
    show: boolean;
    onHide: () => void;
}

const PlanDetails = ({ show, onHide }: PlanDetailsProps) => {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Plan Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="mb-1">
                        <li>
                            <div className="d-flex align-items-center gap-2 w-100 modal-form">
                                <label className="mb-0">Plan Id :</label>
                                <div className="">987445</div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center gap-2 w-100 modal-form">
                                <label className="mb-0">Plan Name :</label>
                                <div className="highlight">Ewa Delta Dental Preventative</div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center gap-2 w-100 modal-form">
                                <label className="mb-0">Carrier :</label>
                                <div className="">Aetna</div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center gap-2 w-100 modal-form">
                                <label className="mb-0">Plan Type :</label>
                                <div className="">Accident</div>
                            </div>
                        </li>
                    </ul>
                    <button className="button w-100" onClick={onHide}>
                        Back
                    </button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PlanDetails;
