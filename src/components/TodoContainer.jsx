import React from "react"

function TodoContainer({ children }) {
    return(
        <>
            <section className='flex flex-col relative items-center content-center h-auto p-6 w-fit bg-gradient-to-r from-[#80d8daac] to-[#392177] rounded-lg'>
            {children}
            </section>        
        </>
    )
}

export { TodoContainer }