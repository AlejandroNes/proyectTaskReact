import './App.css';
import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import Estadistica from './components/Estadistica';

function App() {
  //lista de tareas
  const task = JSON.parse(localStorage.getItem('task'));
  const [tareas, setTareas] = useState(task);

  //GUARDAR LOCALSTORAGE
  useEffect( () => {
    //alojamos el estado tareas en localstorage
    localStorage.setItem('task', JSON.stringify(tareas) );
  },[tareas] )

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
