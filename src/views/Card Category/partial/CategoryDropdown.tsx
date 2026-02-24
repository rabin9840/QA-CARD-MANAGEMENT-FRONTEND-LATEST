import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { IoCardSharp } from 'react-icons/io5';
import { FaRectangleList } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { BsExclamationTriangleFill, BsFillGrid1X2Fill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const categories = [
    { eventKey: 'digital-cards', label: 'Digital Cards', icon: <IoCardSharp color="#f0ad4e" /> },
    {
        eventKey: 'summary',
        label: 'Summary Of Benefits',
        icon: <FaRectangleList color="#f0ad4e" />,
    },
    { eventKey: 'welcome-letter', label: 'Welcome Letter', icon: <IoIosMail color="#428bca" /> },
    { eventKey: 'claim-doc', label: 'Claim Document', icon: <AiFillFileText color="#5bc0de" /> },
    {
        eventKey: 'termination-doc',
        label: 'Termination Document',
        icon: <BsExclamationTriangleFill color="#d9534f" />,
    },
    { eventKey: 'others', label: 'Others', icon: <BsFillGrid1X2Fill color="#428bca" /> },
];

const RxIcon = () => <div className="rx-icon-box">RX</div>;

const CategoryDropdown = () => {
    const [selectedCategory, setSelectedCategory] = useState({
        label: 'RX Formulary',
        icon: <RxIcon />,
    });

    const handleSelect = (eventKey: string | null) => {
        const category = categories.find((c) => c.eventKey === eventKey) || categories[0];
        setSelectedCategory(category);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle
                variant="light"
                id="dropdown-custom-category"
                className="category-dropdown-toggle"
            >
                <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="d-flex gap-2">
                        {selectedCategory.icon}
                        <span>{selectedCategory.label}</span>
                    </div>
                    <div className="">
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="category-dropdown-menu">
                {categories.map((category) => (
                    <Dropdown.Item key={category.eventKey} eventKey={category.eventKey}>
                        <div className="d-flex align-items-center gap-3">
                            <span className="dropdown-icon-wrapper">{category.icon || null}</span>
                            <span>{category.label}</span>
                        </div>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CategoryDropdown;
