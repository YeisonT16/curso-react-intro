import React from "react"

function TodoContainer({ children }) {
    return(
        <section className='flex flex-col relative items-center content-center h-auto p-6 w-fit bg-indigo-400 rounded-lg'>
        {children}
        </section>
    )
}

export { TodoContainer }