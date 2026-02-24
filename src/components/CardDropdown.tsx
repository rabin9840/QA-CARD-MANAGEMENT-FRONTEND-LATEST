// import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const CardDropdown: React.FC = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant="light"
                id="dropdown-custom-card"
                className="card-dropdown-toggle"
            >
                <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="">Select Card</div>
                    <div className="">
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="card-dropdown-menu">
                <Dropdown.Item>
                    <div className="">EBA - Smart Health Qualcare 1</div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="">EBA - Smart Health Qualcare 2</div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="">EBA - Smart Health Qualcare 3</div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="">EBA - Smart Health Qualcare 4</div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CardDropdown;
