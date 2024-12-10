import React, { useState } from 'react'
import Encabezado from './components/Atom/Encabezado.jsx'
import AgregarTareas from './components/Molecule/AgregarTareas.jsx'
import List_tarea from './components/Molecule/List_tarea.jsx'
import SinTareas from './components/Atom/SinTareas.jsx'

function App() {
  
  const[listaTareas, setListaTareas] = useState([]);

  const arrayTareas = (nuevaTarea) => {
    const nueva = {id: Date.now(), name: nuevaTarea};
    setListaTareas([...listaTareas, nueva]);
  };

  const deleteItem = (id) => {
    setListaTareas(listaTareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <>
      <div>
      <Encabezado/>
      <AgregarTareas onAdd={arrayTareas}/>
      {listaTareas.length > 0 ? <List_tarea tareas={listaTareas} onDelete={deleteItem} />  : <SinTareas/> }
    </div>
    </>
  )
}

export default App
