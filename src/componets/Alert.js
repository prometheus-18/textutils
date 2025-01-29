import React, { useEffect } from 'react';

function Alert({ alert, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();  // Automatically close alert after 3 seconds
        }, 1500);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {alert}
        </div>
    );
}

export default Alert;
