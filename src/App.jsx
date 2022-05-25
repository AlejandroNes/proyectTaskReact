import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import Estadistica from './components/Estadistica';

function App() {
  //lista de tareas
  const tareasIniciales = [
    {id:1, tarea:"Aprender Ingles", fecha:"2022-05-28", estado:false},
    {id:2, tarea:"Aprender React", fecha:"2022-08-28", estado:true},
  ]
  const [tareas, setTareas] = useState(tareasIniciales)

  return (
    <div>
      <Header />
      <Formulario setTareas={setTareas} tareas={tareas} />
      <ListaTareas tareas={tareas} setTareas={setTareas} />
      <Estadistica tareas={tareas} />
    </div>
  );
}

export default App;
