import React from 'react'

const Estadistica = ({tareas}) => {

    const completed = () => {
        const completadas = tareas.filter( (item) => item.estado === true ).length;
        return completadas;
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-8 offset-2 mt-5 p-3 shadow-sm border">
                <p>TOTAL TAREAS: {tareas.length}</p>
                <p>TOTAL COMPLETADAS: {completed()}</p>
            </div>
        </div>
    </div>
  )
}

export default Estadistica