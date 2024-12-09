import React from "react"

function TodoHeader({ children }) {
    return(
        <>        
            <header className='flex flex-col items-center'>
            {children}
            </header>
        </>
    )
}

export { TodoHeader }