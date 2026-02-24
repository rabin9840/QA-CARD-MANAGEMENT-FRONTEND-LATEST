import { Dropdown } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const PlanDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant="light"
                id="dropdown-custom-status"
                className="category-dropdown-toggle"
            >
                <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="">Select Plan</div>
                    <div className="">
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="category-dropdown-menu">
                <Dropdown.Item>
                    <div className="d-flex align-items-center gap-3">Digital Cards</div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="d-flex align-items-center gap-3">RX Formulary</div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="d-flex align-items-center gap-3">Welcome Letter</div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="d-flex align-items-center gap-3">Others</div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default PlanDropdown;
