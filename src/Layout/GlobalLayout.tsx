import React, { ReactNode, useState } from 'react';
import SideMenu from '@/components/SideMenu';
import Header from '@/components/Header';

interface GlobalLayoutProps {
    children: ReactNode; // Use ReactNode to accept any valid React children
    onAddNewCard: () => void;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => window.innerWidth >= 993);

    // Toggle Sidebar function
    const handleToggleSidebar = () => {
        setIsSidebarExpanded((prevState) => !prevState);
    };
    return (
        <div className="main-container d-flex">
            <SideMenu isSidebarExpanded={isSidebarExpanded} onToggleSidebar={handleToggleSidebar} />

            <div className={`main-wrapper w-100 ${!isSidebarExpanded ? 'sidebar-close' : ''}`}>
                <Header onToggleSidebar={handleToggleSidebar} />

                {/* Page Content */}
                <div className="content-wrapper">{children}</div>
            </div>
        </div>
    );
};

export default GlobalLayout;
