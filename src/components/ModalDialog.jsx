

function ModalDialog(props){
    
    const collapsibleForm = props.modalDialog ? '' : 'max-h-0 hidden'
    const fnDelete = () => {
        props.onDelete(props.showTodo.text)
        
        
        props.setModalDialog(false)
    }
    return( 
        <>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-fit h-auto items-center content-between min-w-60 p-4 bg-[#392177]/90 rounded-lg text-indigo-700 font-bold border-8 border-gray-400 ${collapsibleForm}`}>
                <h1 className="text-indigo-50 font-bold text-xl">¡Confirmación!</h1>
                <span className="flex flex-col size-fit content-center items-center justify-center text-indigo-100 font-semibold">
                    ¿Estas seguro de eliminar el TODO <p className="font-semibold text-2xl text-emerald-400">{props.showTodo.text}?</p>
                </span>
                <div className="flex justify-around w-fit min-w-52 font-normal p-3">
                    <button className="rounded-lg p-3 m-3 h-auto bg-indigo-400 font-semibold text-sm text-indigo-100 border-2 min-w-24 cursor-pointe5 hover:bg-[#80d8daac] hover:text-gray-300 hover:border-gray-300" onClick={() => {fnDelete()}}>Eliminar</button>
                    <button className="rounded-lg p-3 m-3 h-auto bg-indigo-100 font-semibold text-sm border-2 min-w-24 cursor-pointe5 hover:bg-gray-400 hover:text-indigo-100" onClick={()=>{props.setModalDialog(false)}}>Cancelar</button>
                </div>
            </div>        
        </>    
    
)
    
    
}

export { ModalDialog }