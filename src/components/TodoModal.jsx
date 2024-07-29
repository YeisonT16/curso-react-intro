import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {

    

    return (createPortal (
        <div className={`grid absolute top-0 left-0 place-items-center z-10 h-screen w-screen`}>
            {children}
        </div>,
        document.getElementById('modal')
    )
    )
}

export { Modal };