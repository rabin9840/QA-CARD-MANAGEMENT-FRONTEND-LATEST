import { useContext } from 'react';
import SidebarContext, { SidebarContextType } from '@/context/SidebarContext';

export const useSidebar = (): SidebarContextType => {
    const ctx = useContext(SidebarContext);
    if (!ctx) throw new Error('useSidebar must be used inside SidebarProvider');
    return ctx;
};
