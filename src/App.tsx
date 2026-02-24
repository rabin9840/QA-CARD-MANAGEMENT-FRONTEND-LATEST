import { useState, useEffect } from 'react';
import GlobalLayout from './Layout/GlobalLayout';
import { AppRoutes } from './router';
import UploadCardModal from '@/components/UploadCardModal.tsx';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleFileUpload = (file: File) => {
        console.log('Uploaded file:', file);
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="spinner-container">
                    <div className="nb-spinner"></div>
                </div>
            ) : (
                <div className="">
                    <GlobalLayout onAddNewCard={() => setIsModalOpen(true)}>
                        <AppRoutes />
                    </GlobalLayout>

                    <UploadCardModal
                        show={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onFileUpload={handleFileUpload}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
