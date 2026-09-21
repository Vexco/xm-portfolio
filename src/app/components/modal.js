import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="modal-overlay">
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className="modal-wrapper bg-[#F1F4EE] rounded-2xl">
                <div className="modal bg-[#F1F4EE]">
                    <div className="modal-header bg-[#F1F4EE]">
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1 className="bg-[#F1F4EE] text-5xl font-serif font-bold mb-6">{title}</h1>}
                    <div className="modal-body bg-[#F1F4EE] font-serif border-black/15 mr-2 pb-2 mb-2 min-w-9/10">{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal