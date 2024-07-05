import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
    return (createPortal (
        <div className='absolute z-0 '>
            {children}
        </div>,
        document.getElementById('modal')
    )
    )
}

export { Modal };