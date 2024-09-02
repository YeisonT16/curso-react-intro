import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {

    

    return (createPortal (
        <div className={`absolute place-items-center z-10 h-screen w-full`}>
            {children}
        </div>,
        document.getElementById('modal')
    )
    )
}

export { Modal };