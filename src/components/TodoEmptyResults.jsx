import React from "react";

function TodoEmptyResults(props){
    return(
        <>
            <span>No se encontraron coincidencias para 
                <p className="font-bold text-xl text-sky-600">{props.searchText} ...</p>
            </span>
        </>
    )
}

export { TodoEmptyResults }