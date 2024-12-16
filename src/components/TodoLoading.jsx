import React from "react";

function TodoLoading() {

    const styleLoading = 'bg-gradient-to-tl from-indigo-400 to-white animate-pulse'

    return (
        <>
            <div className={`relative w-72 h-auto min-h-6 p-2 text-mdrounded-xl font-semibold border-4 mb-2 rounded-xl ${styleLoading}`}>
                <span className={`absolute -left-2 -top-2 rounded-full size-6 ${styleLoading}`}></span>
                <p className='h-6 w-68'></p>
                <span className={`absolute -right-2 -top-2 rounded-full size-6 ${styleLoading}`}></span>
            </div>        
        </>
    )

}

export { TodoLoading }