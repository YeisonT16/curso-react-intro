import React from "react";
import  ReactDOM, { createPortal }  from "react-dom";

function Modal({children}) {
    return createPortal (
        <div>
            {children}
        </div>,
        document.getElementById('Modal')
    )
    
}

export { Modal };