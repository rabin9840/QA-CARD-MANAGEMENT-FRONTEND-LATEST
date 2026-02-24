import { createContext, ReactNode, useState } from 'react';

// Define the type for context
export interface SidebarContextType {
    isSidebarExpanded: boolean;
    toggleSidebar: () => void;
}

// Define props for the provider
interface SidebarProviderProps {
    children: ReactNode;
}

// Create context (initially undefined)
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Provider component
export const SidebarProvider = ({ children }: SidebarProviderProps) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const toggleSidebar = () => setIsSidebarExpanded((prev) => !prev);

    return (
        <SidebarContext.Provider value={{ isSidebarExpanded, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarContext; // export default for use in hook
