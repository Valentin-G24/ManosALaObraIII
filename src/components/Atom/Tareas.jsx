import React from 'react'
import Basurero from './Basurero'
import  { useState } from 'react'

export default function Item({id, name, onDelete}) {

  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked); 
  };

  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <div>
      <div className="contenedor">
      <div className="contenedora"> 
        <input type="checkbox" onClick={handleClick} />
          <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            {name}
          </span>
        <button onClick={handleDelete} className="basurero">🗑️</button> 
      </div>
     </div>
    </div>
  )
}