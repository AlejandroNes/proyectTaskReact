import React, {useState} from 'react'

const Formulario = ({setTareas, tareas}) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [sw, setSw] = useState(0)

    //funciones
    const validarForm = (e) => {
        e.preventDefault();
        if( !task.trim()){
            setSw(1)
            setTimeout( () => {
                setSw(0)
            },1000 )
            return
        }
        if( !date.trim()){
            setSw(2)
            setTimeout( () => {
                setSw(0)
            },1000 )
            return
        }
        setSw(3)
            setTimeout( () => {
                setSw(0)
            },1000 )
            
        const objTask = { id:Date.now(), tarea:task, fecha:date, estado:false  }
        setTareas( [...tareas, objTask] )
        setTask('');
        setDate('');
    }

    return (      

        <div className="container">
            <div className="row">
                <form onSubmit={validarForm} className="col-10 offset-1  p-3 border shadow-sm">
                    { 
                    sw === 1 ? 
                     <p className='text-center text-danger fw-bold'>COMPLETE LA TAREA</p> 
                     : sw === 2 ?
                    <p className='text-center text-danger fw-bold'>COMPLETE LA FECHA</p>
                     : sw === 3 ? <p className='text-center text-success fw-bold'>TAREA AGREGADA</p>
                     : <p className='text-center text-dark fw-bold'>FORMULARIO</p>
                     }
                    <div className='d-flex justify-content-center'>

                        <input 
                        className='form-control mx-1' 
                        type="text"
                        name="task"
                        value={task}
                        onChange={ (e) => setTask( e.target.value ) }
                         />
                        <input 
                        className='form-control mx-1' 
                        type="date"
                        name="date"
                        value={date}
                        onChange={ (e) => setDate( e.target.value ) }
                         />

                        <button className='btn btn-primary btn-sm mx-1' type='submit'>ADD</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario