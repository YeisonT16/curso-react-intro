import React from 'react'

function PlusIcon({whith, height, strokeWidth}){
    return(
        <svg  
        xmlns="http://www.w3.org/2000/svg"  
        width={whith}  height={height}  
        viewBox="0 0 24 24"  
        fill="none"  
        stroke="currentColor"  
        strokeWidth={strokeWidth}  
        strokeLinecap="round"  
        strokeLinejoin="round"  
        >
        <path stroke="none" 
        d="M0 0h24v24H0z" 
        fill="none"/>
        <path 
        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" 
        />
        <path 
        d="M9 12h6" 
        />
        <path 
        d="M12 9v6" 
        />
        </svg>
    )
}  


export { PlusIcon }