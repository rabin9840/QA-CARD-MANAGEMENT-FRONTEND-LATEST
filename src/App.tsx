import { lazy, Suspense, useState } from 'react';
// import { useCookies } from 'react-cookie';
import { AppRoutes } from './router';
import { SidebarProvider } from './context/SidebarContext';

// Lazy-loaded components
const GlobalLayout = lazy(() => import('./Layout/GlobalLayout'));
const UploadCardModal = lazy(() => import('@/components/UploadCardModal'));

// Simple fallback loader
const PageLoader = () => (
    <div className="spinner-container">
        <div className="nb-spinner"></div>
    </div>
);

function App() {
    // const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => window.innerWidth >= 993);
    // const [cookies] = useCookies(['access_token']);
    // const isAuthenticated = !!cookies.access_token;
    const isAuthenticated = true;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFileUpload = (file: File) => {
        console.log('Uploaded file:', file);
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Load layout lazily only when logged in */}
            {isAuthenticated ? (
                <Suspense fallback={<PageLoader />}>
                    <SidebarProvider>
                        <GlobalLayout onAddNewCard={() => setIsModalOpen(true)}>
                            <AppRoutes />
                        </GlobalLayout>
                    </SidebarProvider>
                </Suspense>
            ) : (
                <AppRoutes />
            )}

            {/* Lazy load modal only when needed */}
            {isAuthenticated && (
                <Suspense fallback={<PageLoader />}>
                    <UploadCardModal
                        show={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onFileUpload={handleFileUpload}
                    />
                </Suspense>
            )}
        </div>
    );
}

export default App;
