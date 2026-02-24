import React from 'react';
import { Offcanvas } from 'react-bootstrap';

interface AdvanceFilterProps {
    show: boolean;
    handleClose: () => void;
}

const AdvanceFilter: React.FC<AdvanceFilterProps> = ({ show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Advanced Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="form-modal">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="created-by" className="mb-2">
                                Created By
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter Created by "
                                className="input-field w-100"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="created-date" className="mb-2">
                                Created Date{' '}
                            </label>
                            <br />
                            <input
                                type="date"
                                placeholder="Enter Created by "
                                className="input-field w-100"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="updated-date" className="mb-2">
                                Updated Date{' '}
                            </label>
                            <br />
                            <input
                                type="date"
                                placeholder="Enter Updated by "
                                className="input-field w-100"
                            />
                        </div>
                        <div className="col-md-12">
                            <legend className="group-title">Select Card Type</legend>
                            <div className="options-container">
                                <div className="option">
                                    <input
                                        type="radio"
                                        id="digital-cards"
                                        name="card_type"
                                        value="digital_cards"
                                        checked
                                    />
                                    <label htmlFor="digital-cards">Digital Cards</label>
                                </div>

                                <div className="option">
                                    <input
                                        type="radio"
                                        id="rx-formulary"
                                        name="card_type"
                                        value="rx_formulary"
                                    />
                                    <label htmlFor="rx-formulary">RX Formulary</label>
                                </div>

                                <div className="option">
                                    <input
                                        type="radio"
                                        id="claim-document"
                                        name="card_type"
                                        value="claim_document"
                                    />
                                    <label htmlFor="claim-document">Claim Document</label>
                                </div>

                                <div className="option">
                                    <input
                                        type="radio"
                                        id="welcome-letter"
                                        name="card_type"
                                        value="welcome_letter"
                                    />
                                    <label htmlFor="welcome-letter">Welcome Letter</label>
                                </div>

                                <div className="option">
                                    <input
                                        type="radio"
                                        id="termination-document"
                                        name="card_type"
                                        value="termination_document"
                                    />
                                    <label htmlFor="termination-document">
                                        Termination Document
                                    </label>
                                </div>

                                <div className="option">
                                    <input
                                        type="radio"
                                        id="summary"
                                        name="card_type"
                                        value="summary"
                                    />
                                    <label htmlFor="summary">Summary Of Benefits</label>
                                </div>
                                <div className="option">
                                    <input
                                        type="radio"
                                        id="others"
                                        name="card_type"
                                        value="others"
                                    />
                                    <label htmlFor="others">Others</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default AdvanceFilter;
