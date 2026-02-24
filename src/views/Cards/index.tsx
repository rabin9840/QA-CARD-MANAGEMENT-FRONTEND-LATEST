import { useState } from 'react';
import { MdFileCopy } from 'react-icons/md';
import CardTable from './partial/cardsTable';
import QuickFilterInput from '@/components/QuickFilterInput';
import AdvanceFilter from './partial/modal/AdvanceFilter';
import { BsFilter } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './style.css';

const Index: React.FC = () => {
    const [showFilter, setShowFilter] = useState(false);
    const handleFilterClose = () => setShowFilter(false);
    const handleFilterShow = () => setShowFilter(true);
    const [selectedStatus, setSelectedStatus] = useState({
        label: 'All',
        value: 'all',
        className: 'all-tag tag-drop',
        dotClass: 'all-dot',
    });

    const statusOptions = [
        { label: 'All', value: 'all', className: 'tag-drop all-tag', dotClass: 'all-dot' },
        {
            label: 'Active',
            value: 'active',
            className: 'tag-drop active-tag ',
            dotClass: 'active-dot',
        },
        {
            label: 'Pending',
            value: 'pending',
            className: 'tag-drop pending-tag',
            dotClass: 'pending-dot',
        },
        {
            label: 'Inactive',
            value: 'inactive',
            className: 'tag-drop inactive-tag',
            dotClass: 'inactive-dot',
        },
    ];

    const handleSelectStatus = (status: {
        label: string;
        value: string;
        className: string;
        dotClass: string;
    }) => {
        setSelectedStatus(status);
        console.log('Selected status:', status.value);
    };
    return (
        <>
            <div className="category-tab">
                <MdFileCopy />
                <span className="category-label"> All Cards</span>
                <span className="category-count">25</span>
            </div>
            <div className="card-wrapper">
                <div className="d-flex gap-3 align-items-center flex-wrap">
                    <div className="form-group-row">
                        <QuickFilterInput
                            labels={['Card Name']}
                            placeholders={{
                                'Card Name': 'Enter card name to filter...',
                            }}
                            onSearch={({ value }) => {
                                console.log('Search term updated to:', value);
                            }}
                            hideDropdown={true}
                        />
                    </div>
                    <div className="d-flex align-items-center input-field p-0 ps-3">
                        <div className="">Status :</div>
                        <div className="status-dropdown">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="light"
                                    id="dropdown-custom-status"
                                    className="category-dropdown-toggle"
                                >
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div
                                            className={`${selectedStatus.className} tag d-flex align-items-center`}
                                        >
                                            <div className={`${selectedStatus.dotClass} dot`}></div>
                                            {selectedStatus.label}
                                        </div>
                                        <div className="">
                                            <MdOutlineKeyboardArrowDown />
                                        </div>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="category-dropdown-menu">
                                    {statusOptions.map((option) => (
                                        <Dropdown.Item
                                            key={option.value}
                                            onClick={() => handleSelectStatus(option)}
                                            active={selectedStatus.value === option.value}
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div
                                                    className={`${option.className} tag d-flex align-items-center`}
                                                >
                                                    <div className={`${option.dotClass} dot`}></div>
                                                    {option.label}
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <button className="filter-btn" onClick={handleFilterShow}>
                        <BsFilter className="me-2" /> Advanced Filter
                    </button>
                </div>
                <CardTable />
            </div>
            <AdvanceFilter show={showFilter} handleClose={handleFilterClose} />
        </>
    );
};

export default Index;
