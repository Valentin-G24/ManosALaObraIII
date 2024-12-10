import React from "react";
import Item from "../Atom/Tareas";

function List_tarea({tareas, onDelete}){

  const eliminar = (id) => {
    onDelete(id);
  };

  const listItems = tareas.slice().reverse().map(t =>
    (<Item key={t.id} name={t.name} onDelete={() => eliminar(t.id)}/>)
  );

    return (
      <div>
      {listItems}
    </div>
      
    )

}

export default List_tarea;