import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const StatusDropdown: React.FC = () => {
    const [selectedStatus, setSelectedStatus] = useState({
        label: 'All',
        value: 'all',
        className: 'all-tag',
        dotClass: 'all-dot',
    });

    const statusOptions = [
        { label: 'All', value: 'all', className: 'tag', dotClass: 'all-dot' },
        { label: 'Active', value: 'active', className: 'tag', dotClass: 'active-dot' },
        { label: 'Pending', value: 'pending', className: 'tag', dotClass: 'pending-dot' },
        {
            label: 'Inactive',
            value: 'inactive',
            className: 'tag',
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
        <Dropdown>
            <Dropdown.Toggle
                variant="light"
                id="dropdown-custom-status"
                className="category-dropdown-toggle"
            >
                <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className={`${selectedStatus.className} tag d-flex align-items-center`}>
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
                            <div className={`${option.className} tag d-flex align-items-center`}>
                                <div className={`${option.dotClass} dot`}></div>
                                {option.label}
                            </div>
                        </div>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default StatusDropdown;
