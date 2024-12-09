import React from "react";

function TodoList(props){

    const renderFunc = props.render || props.children

    return(
        <>
            <section className="flex flex-col content-center h-auto p-3 w-fit bg-indigo-100 rounded-lg ">
                {props.error && props.onError()}
                {props.loading && props.onLoading()}

                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

                {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearchResults(props.searchText)}

                {(!props.loading && !props.error) && props.filteredTodos.map(renderFunc)}
                
            </section>        
        </>

        
    );
}

export { TodoList };