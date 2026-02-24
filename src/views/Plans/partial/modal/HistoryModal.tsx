import ActivityLog from '@/views/Cards/partial/ActivityLog';
import React from 'react';
import { Offcanvas } from 'react-bootstrap';

interface HistoryProps {
    show: boolean;
    handleClose: () => void;
}

const AdvanceFilter: React.FC<HistoryProps> = ({ show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Activity Log</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="">
                    <ActivityLog />
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default AdvanceFilter;
