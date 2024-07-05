import React from "react";

function TodoList(props){

    const renderFunc = props.render || props.children

    return(

        <section className="">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos.length) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && onEmptySeachResults(props.searchText)}

            {props.searchedTodos.map(renderFunc)}
            
            
        </section>
        
    );
}

export { TodoList };