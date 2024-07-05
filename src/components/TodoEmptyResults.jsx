import React from "react";

function TodoEmptyResults(props){
    return(
        <p>No se encontraron coincidencias para {props.searchText} ...</p>
    )
}

export { TodoEmptyResults }