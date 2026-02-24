import { useState } from 'react';
import { IoInformationCircle, IoClose } from 'react-icons/io5';
import { FaUpload } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Dropdown } from 'react-bootstrap';
import QuickFilterInput from './QuickFilterInput';
import CustomAlert from './CustomAlert';

export interface CardDetails {
    displayName: string;
    category: string;
    effectiveDate: string;
    planType: string;
    carrier: string;
    associatedPlans: string[];
}

interface PreviewViewProps {
    file: File;
    onTryAgain: () => void;
    onSubmit: (details: CardDetails) => void;
}

function PreviewView({ file, onTryAgain, onSubmit }: PreviewViewProps) {
    const [displayName, setDisplayName] = useState('');
    const [category, setCategory] = useState('');
    const [effectiveDate, setEffectiveDate] = useState('');
    const [planType, setPlanType] = useState('');
    const [carrier, setCarrier] = useState('');
    const [associatedPlans, setAssociatedPlans] = useState([
        'EWA DELTA DENTAL PPO 1000',
        'EWA DELTA DENTAL PPO 1000',
        'EWA DELTA DENTAL PPO 1000',
    ]);

    const removePlan = (index: number) => {
        setAssociatedPlans((plans) => plans.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        const cardDetails: CardDetails = {
            displayName,
            category,
            effectiveDate,
            planType,
            carrier,
            associatedPlans,
        };
        onSubmit(cardDetails);
    };

    return (
        <div className="card-preview-body">
            <div className="preview-left">
                <img src={URL.createObjectURL(file)} alt="Preview" className="preview-image" />
            </div>
            <div className="preview-right">
                <p className="file-name">File: {file.name}</p>

                {/* Display Name */}
                <div className="form-group-row">
                    <label>
                        Display Name <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Enter display name"
                    />
                </div>

                {/* Category */}
                <div className="form-group-row justify-content-start">
                    <label>
                        Select Category <span className="required">*</span>
                    </label>
                    <Dropdown
                        onSelect={(eventKey) => setCategory(eventKey || '')}
                        className="w-100"
                    >
                        <Dropdown.Toggle
                            variant="light"
                            id="dropdown-custom-status"
                            className="category-dropdown-toggle w-100"
                        >
                            <div className="d-flex align-items-center justify-content-between gap-2">
                                <div>{category || 'Select Category'}</div>
                                <div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="category-dropdown-menu">
                            <Dropdown.Item eventKey="Digital Cards">Digital Cards</Dropdown.Item>
                            <Dropdown.Item eventKey="RX Formulary">RX Formulary</Dropdown.Item>
                            <Dropdown.Item eventKey="Welcome Letter">Welcome Letter</Dropdown.Item>
                            <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                {/* Effective Date */}
                <div className="form-group-row">
                    <label>
                        Effective Date <span className="required">*</span>
                    </label>
                    <div className="input-with-icon">
                        <input
                            type="date"
                            value={effectiveDate}
                            onChange={(e) => setEffectiveDate(e.target.value)}
                        />
                        <div className="tooltip-wrapper">
                            <IoInformationCircle className="cation-icon" />
                            <span className="tooltip-text">
                                The Effective Date will set your card to a pending state until the
                                scheduled date.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Plan Type */}
                <div className="form-group-row">
                    <QuickFilterInput
                        labels={['Plan type']}
                        placeholders={{ 'Plan type': 'Search Plan type' }}
                        onSearch={({ label }) => setPlanType(label)}
                        hideDropdown={true}
                    />
                </div>

                {/* Carrier */}
                <div className="form-group-row">
                    <QuickFilterInput
                        labels={['Carrier']}
                        placeholders={{ Carrier: 'Search Carrier' }}
                        onSearch={({ label }) => setCarrier(label)} // Correctly sets carrier state
                        hideDropdown={true}
                    />
                </div>
                {/* Associated Plans */}
                <div className="form-group">
                    <h5 className="associated-plan-header">Associated Plan</h5>
                    <div className="associated-plan-list">
                        {associatedPlans.map((plan, index) => (
                            <div key={index} className="plan-chip">
                                {plan}
                                <IoClose
                                    className="chip-remove"
                                    onClick={() => removePlan(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alert */}
                <CustomAlert
                    severity="error"
                    message="We couldn’t add your card due to a technical issue. Please try again or contact support if the problem persists."
                />

                {/* Action Buttons */}
                <div className="d-flex flex-column gap-2">
                    <button className="re-try-btn secondary-btn full-width" onClick={onTryAgain}>
                        Try again
                    </button>
                    <button className="upload-btn full-width" onClick={handleSubmit}>
                        Upload <FaUpload className="ms-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PreviewView;
