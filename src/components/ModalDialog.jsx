

function ModalDialog(props){
    
    const collapsibleForm = props.modalDialog ? '' : 'max-h-0 hidden'
    const deleteFunc = (text) => {
        props.id(text)
        //props.onDelete(text)     
        props.setModalDialog(false)
        
    }
    return(     
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-fit h-auto items-center content-between min-w-60 p-4 bg-indigo-400/90 rounded-lg bg-indigo-100 text-indigo-700 font-bold border-8 border-gray-400 ${collapsibleForm}`}>
                <h1 className="text-indigo-50 font-bold text-xl">Confirmación</h1>
                <p className="text-indigo-100 font-semibold">
                    Estas seguro de eliminar este TODO?
                </p>
                <div className="flex justify-around w-fit min-w-52 font-normal p-3">
                    <button className="rounded-lg p-3 m-3 h-auto bg-indigo-500 font-semibold text-sm text-indigo-100 border-2 min-w-24 cursor-pointe5 hover:bg-indigo-200 hover:text-indigo-500 hover:border-indigo-500" onClick={deleteFunc}>Eliminar</button>
                    <button className="rounded-lg p-3 m-3 h-auto bg-indigo-100 font-semibold text-sm border-2 min-w-24 cursor-pointe5 hover:bg-indigo-400 hover:text-indigo-100" onClick={()=>{props.setModalDialog(false)}}>Cancelar</button>
                </div>
            </div>
    
)
    
    
}

export { ModalDialog }