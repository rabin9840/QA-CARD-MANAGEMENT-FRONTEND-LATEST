import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoHomeOutline, IoClose, IoList } from 'react-icons/io5';
import { FaRegAddressCard } from 'react-icons/fa6';
import { BiCategory } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import MobileLogo from '../assets/images/Card-logo-mobile.svg';
import Logo from '../assets/images/Card-logo-full.svg';
interface SideMenuProps {
    isSidebarExpanded: boolean;
    onToggleSidebar: () => void;
}

interface RouteMap {
    id: string;
    icon: React.ReactNode;
    label: string;
}

const SideMenu: React.FC<SideMenuProps> = ({ onToggleSidebar, isSidebarExpanded }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const location = useLocation();

    // Define route mappings with corresponding icons and labels
    const routeMap: RouteMap[] = [
        { id: 'dashboard', icon: <IoHomeOutline />, label: 'Dashboard' },
        { id: 'cards', icon: <FaRegAddressCard />, label: 'Card' },
        { id: 'card-category', icon: <BiCategory />, label: 'Card Category' },
        { id: 'plans', icon: <IoList />, label: 'Plans' },
        { id: 'activity-log', icon: <MdHistory />, label: 'Activity Log' },
    ];

    // Return the appropriate routes based on user type (Admin or Agent)
    const navigationItems = useMemo(() => {
        // You can dynamically adjust this if needed
        return routeMap.map((item) => ({
            ...item,
            // Special handling for dashboard to map it to "/"
            path: item.id === 'dashboard' ? '/' : `/${item.id}`,
        }));
    }, []);

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine sidebar width based on screen size
    let sidebarWidth;

    if (windowWidth <= 576) {
        // Mobile view
        sidebarWidth = isSidebarExpanded ? 300 : 75;
    } else if (windowWidth < 992) {
        // Tablet view
        sidebarWidth = isSidebarExpanded ? 280 : 75;
    } else {
        // Desktop view
        sidebarWidth = isSidebarExpanded ? 256 : 75;
    }

    return (
        <div
            style={{ width: sidebarWidth, transition: 'width 0.3s' }}
            className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}
        >
            <div className="sidebar-head">
                {/* table and mobile view side bar collapsed logo  */}
                {!isSidebarExpanded && (
                    <Link to="/">
                        <img src={MobileLogo} className="mob-logo" alt="Mobile Logo" />
                    </Link>
                )}

                {/* tablet and mobile view side bar expanded logo and close */}
                {isSidebarExpanded && (
                    <Link to="/">
                        <img src={Logo} className="logo" alt="Plan Config Logo" />
                    </Link>
                )}
                {isSidebarExpanded && windowWidth < 992 && (
                    <IoClose
                        className="sidebar-close-icon pe-cursor"
                        onClick={onToggleSidebar}
                        data-testid="sidebar"
                    />
                )}
            </div>
            <div className="sidebar-items gap-1">
                {navigationItems.map((item) => {
                    // Determine if the current item is active
                    const isActive =
                        // Check for exact match first
                        location.pathname === item.path ||
                        // Then check for starting with the path (for nested routes)
                        (item.path !== '/' && location.pathname.startsWith(item.path + '/'));

                    return (
                        <>
                            <div
                                key={item.id}
                                className={`sidebar-item ${isActive ? 'active' : ''}`}
                                onClick={() => {
                                    if (windowWidth < 992 && isSidebarExpanded) {
                                        onToggleSidebar();
                                        setTimeout(() => {
                                            navigate(String(item.path));
                                        }, 300);
                                    } else {
                                        navigate(String(item.path));
                                    }
                                }}
                            >
                                {item.icon}
                                {isSidebarExpanded && (
                                    <span className="sidebar-text">{item.label}</span>
                                )}
                            </div>
                        </>
                    );
                })}
            </div>
            {/* Conditional rendering for the version section */}
            {isSidebarExpanded && <div className="version-section">App Version 1.1</div>}
            {!isSidebarExpanded && (
                <div className="version-section version-section-collapsed">V1.1</div>
            )}
        </div>
    );
};

export default SideMenu;
