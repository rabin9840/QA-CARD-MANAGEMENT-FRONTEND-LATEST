// CustomAlert.tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { SxProps } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IoCloseCircle, IoInformationCircle } from 'react-icons/io5';
import InfoIcon from '@mui/icons-material/Info';

interface CustomAlertProps {
    severity: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    message: string;
    onClose?: () => void;
}

const severityStyles: Record<string, SxProps> = {
    success: {
        backgroundColor: '#d1fae5', // bg color
        color: 'var(--green)', // text color
        '& .MuiAlert-icon': {
            color: 'var(--green)',
            alignItems: 'center', // puts the icon in center vertically }, //icon color
        },
    },
    error: {
        backgroundColor: '#FF322B1a', // bg color
        color: '#AE2900', // text color
        '& .MuiAlert-icon': {
            color: 'var(--red)', //icon color
            borderLeft: '2px solid var(--red)',
            paddingLeft: '8px',
            marginLeft: '-8px',
            alignItems: 'center', // puts the icon in center vertically
        },
    },
    warning: {
        backgroundColor: '#FFC62B1A', // bg color
        color: '#AE7F00', // text color
        '& .MuiAlert-icon': {
            color: 'var(--yellow)', //icon color
            borderLeft: '2px solid var(--yellow)',
            paddingLeft: '8px',
            marginLeft: '-8px',
            alignItems: 'center', // puts the icon in center vertically
        },
    },
    info: {
        backgroundColor: '#dbeafe', // bg color
        color: '#1e3a8a', // text color
        '& .MuiAlert-icon': {
            color: '#1e3a8a',
            alignItems: 'center', // puts the icon in center vertically }, //icon color
        },
    },
};

const severityIcons = {
    success: <CheckCircleIcon />,
    error: <IoCloseCircle />,
    warning: <IoInformationCircle />,
    info: <InfoIcon />,
};

const CustomAlert: React.FC<CustomAlertProps> = ({ severity, title, message, onClose }) => {
    return (
        <Alert
            severity={severity}
            icon={severityIcons[severity]}
            onClose={onClose}
            sx={severityStyles[severity]}
        >
            {title && <AlertTitle>{title}</AlertTitle>}
            {message}
        </Alert>
    );
};

export default CustomAlert;
