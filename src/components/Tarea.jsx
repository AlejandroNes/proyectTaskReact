import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faList, faListCheck, faMarker } from '@fortawesome/free-solid-svg-icons'

const Tarea = ({ item, cambiarEstado, eliminarTarea, actualizarTarea }) => {

    const [editar, setEditar] = useState(false);
    const [tareaEditada, setTareaEditada] = useState(item.tarea);

    //FUNCION EDITAR
    const actualizarTask = (e) => {
        e.preventDefault();
        setEditar(false);
        actualizarTarea(tareaEditada, item.id)

    }

    return (
        <li className="list-group-item d-flex justify-content-between">
               <div>
               { editar ? null : item.estado ? (
                    <button
                        className='btn btn-outline-primary btn-sm d-inline me-2 border-0'
                        onClick={() => cambiarEstado(item.id)}
                    >
                        <FontAwesomeIcon icon={faListCheck} />
                    </button>
                ) : (
                    <button
                        className='btn btn-outline-dark btn-sm d-inline me-2 border-0'
                        onClick={() => cambiarEstado(item.id)}
                    >
                        <FontAwesomeIcon icon={faList} />
                    </button>
                )}

                {
                    editar ?
                        <div className='d-inline'>
                            <form className='d-flex' onSubmit={actualizarTask}>
                                <input type="text" 
                                className='form-control rounded-0' 
                                placeholder='actualizar'
                                value={tareaEditada}
                                onChange={ (e) => setTareaEditada( e.target.value ) }

                                />
                                <button type='submit' className='btn btn-success btn-sm rounded-0'>
                                    <FontAwesomeIcon icon={faMarker} />
                                </button>
                            </form>
                        </div>
                        : <p className='d-inline'>{item.tarea} - <span className='fw-light text-muted'>{item.fecha}</span></p>
                }


            </div>
            <div>
                <button className='btn btn-danger btn-sm mx-1'
                    onClick={() => eliminarTarea(item.id)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className='btn btn-warning text-white btn-sm mx-1'
                        onClick={() => setEditar(!editar)}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                        
                </button>
            </div>
        </li>
    )
}

export default Tarea