import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import UploadView from './UploadView.tsx';
import PreviewView, { CardDetails } from './PreviewView.tsx';

interface UploadCardModalProps {
    show: boolean;
    onClose: () => void;
    onFileUpload: (file: File, details: CardDetails) => void;
}

function UploadCardModal({ show, onClose, onFileUpload }: UploadCardModalProps) {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleFileSelected = (file: File) => {
        setUploadedFile(file);
    };

    const handleTryAgain = () => {
        setUploadedFile(null);
    };

    const handleFormSubmit = (details: CardDetails) => {
        if (uploadedFile) {
            console.log('Submitting final data:', { file: uploadedFile, details });
            onFileUpload(uploadedFile, details);
            // You might want to close the modal after submission
            onClose();
        } else {
            console.error('Attempted to submit without a file.');
        }
    };

    // Reset state when the modal is closed
    const handleExited = () => {
        setUploadedFile(null);
    };

    return (
        <Modal
            show={show}
            onHide={onClose}
            onExited={handleExited}
            centered
            size="xl"
            backdrop="static"
        >
            <div className="modal-header">
                <h3>{!uploadedFile ? 'Add New Card' : 'Card Preview'}</h3>
                <IoClose className="close-btn" onClick={onClose} />
            </div>

            {!uploadedFile ? (
                <UploadView onFileSelect={handleFileSelected} />
            ) : (
                <PreviewView
                    file={uploadedFile}
                    onTryAgain={handleTryAgain}
                    onSubmit={handleFormSubmit}
                />
            )}
        </Modal>
    );
}

export default UploadCardModal;
