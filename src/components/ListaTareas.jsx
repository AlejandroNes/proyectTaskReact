import React from 'react'
import Tarea from './Tarea'

const ListaTareas = ({tareas, setTareas}) => {

    //FUNCION CAMBIAR ESTADO
    const cambiarEstado = (id) => {
        const changeState = tareas.map( (item) => {
            if( item.id === id ){
                item.estado = !item.estado;
                return item
            }else{
                return item
            }
        } )
        setTareas(changeState)
    }
    //ELIMINAR TAREA
    const eliminarTarea = (id) => {
        const deleteTask = tareas.filter( (item) => item.id !== id );
        setTareas(deleteTask)
    }

    //ACTUALIZAR LA TAREA
    const actualizarTarea = (tarea, id) => {
       const editTask = tareas.map( (item) => {
           if(item.id === id){
               item.tarea = tarea;
               return item;
           }else{
               return item;
           }
       } )
       setTareas(editTask);
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-10 offset-1 p-2 border">
                    <p className='text-center fw-bold'>LISTA DE TAREAS</p>
                    <ul className="list-group list-group-flush">
                        {tareas.length > 0 ? tareas.map( (item) => (

                            <Tarea 
                            key={item.id} 
                            item={item} 
                            cambiarEstado={cambiarEstado}
                            eliminarTarea={eliminarTarea}
                            actualizarTarea={actualizarTarea}
                            />

                        ) ) : <p className='text-center text-muted'>THERE ARE NOT TASKS</p> }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListaTareas