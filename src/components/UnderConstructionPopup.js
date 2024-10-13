import React from 'react';
import '../customCss/UnderConstructionPopup.css'; // Import the CSS for the popup

const UnderConstructionPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render anything if not open

    return (
        <div className="popup-overlay">
            <div className="popup">
                <button className="close-button" onClick={onClose}>
                    &times; {/* Cross button */}
                </button>
                <h2>Under Construction</h2>
                {/* <p>Still under construction.</p> */}
            </div>
        </div>
    );
};

export default UnderConstructionPopup;
