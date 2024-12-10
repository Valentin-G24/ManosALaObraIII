import React from "react";
import Input from '../Atom/Input';
import BotonAdd from '../Atom/BotonAdd'
import { useState } from "react";


function AgregarTareas({onAdd}){

    const [nuevaTarea, setNuevaTarea] = useState('');

  const handleChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const handleClick = () => {
    if(nuevaTarea.length !== 0){
      onAdd(nuevaTarea);
      setNuevaTarea('');
    }
    
  };
    
    return (
      <div className="Agregar">
      
        <input 
          type="text" 
          value={nuevaTarea}
          onChange={handleChange}
        />
        <button className="boton" type="submit" onClick={handleClick}>ADD</button>

    

    </div>
        
    )

}
export default AgregarTareas;