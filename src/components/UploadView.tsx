import React from 'react';
import { FaUpload } from 'react-icons/fa6';

interface UploadViewProps {
    onFileSelect: (file: File) => void;
}

function UploadView({ onFileSelect }: UploadViewProps) {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileSelect(file);
        }
    };

    return (
        <div className="upload-card-body">
            <p className="non-customize-text mb-2">Non-Customize Card</p>
            <div className="upload-area">
                <label htmlFor="fileInput" className="upload-label">
                    <p className="m-0">Drop your file here to upload</p>
                    <button
                        type="button"
                        className="upload-btn"
                        onClick={() => document.getElementById('fileInput')?.click()}
                    >
                        Upload Card <FaUpload className="ms-2" />
                    </button>
                    <input
                        id="fileInput"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>
        </div>
    );
}

export default UploadView;
