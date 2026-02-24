import React, { useState, useEffect, useRef } from 'react';
import { HiSearch } from 'react-icons/hi';

interface QuickFilterInputProps {
    labels?: string[];
    placeholders?: Record<string, string>;
    onSearch?: (data: { label: string; value: string }) => void;
    hideDropdown?: boolean; // new prop
}

const QuickFilterInput: React.FC<QuickFilterInputProps> = ({
    labels = ['Name', 'System ID', 'Rep Code'],
    placeholders = {
        Name: 'Enter Name',
        'System ID': 'Enter System ID',
        'Rep Code': 'Enter Rep Code',
    },
    onSearch,
    hideDropdown = false, // default false
}) => {
    const [selectedLabel, setSelectedLabel] = useState<string>(labels[0] || '');
    const [inputValue, setInputValue] = useState<string>('');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        if (!hideDropdown && labels.length > 1) {
            setDropdownOpen((prev) => !prev);
        }
    };

    const selectLabel = (label: string) => {
        setSelectedLabel(label);
        setInputValue('');
        setDropdownOpen(false);
    };

    const triggerSearch = () => {
        onSearch?.({ label: selectedLabel, value: inputValue });
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="d-flex align-items-stretch quick-filter-wrap" ref={wrapperRef}>
            {/* Dropdown Label */}
            {!hideDropdown && labels.length > 1 ? (
                <div className="label-dropdown position-relative">
                    <button
                        className="dropdown-toggle text-capitalize"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        {selectedLabel}
                    </button>
                    {dropdownOpen && (
                        <ul
                            className="dropdown-menu show"
                            style={{ position: 'absolute', top: '70%', zIndex: 10 }}
                        >
                            {labels.map((label, index) => (
                                <li
                                    key={index}
                                    className={label === selectedLabel ? 'selected-option' : ''}
                                >
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            selectLabel(label);
                                        }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <div className="label-static text-capitalize d-flex align-items-center px-3">
                    {selectedLabel}
                </div>
            )}

            {/* Input with Search Icon */}
            <div className="dropdown-input-wrap position-relative flex-grow-1">
                <input
                    type="text"
                    className="dropdown-input w-100 pe-5"
                    placeholder={placeholders[selectedLabel] || ''}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyUp={(e) => e.key === 'Enter' && triggerSearch()}
                />
                <HiSearch
                    className="fa fa-search position-absolute text-muted"
                    style={{
                        top: '50%',
                        right: '1rem',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </div>
    );
};

export default QuickFilterInput;
