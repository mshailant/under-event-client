import React from "react";


export default function Individual({id, title, imagen,}){
  return(
      <div >
        <div key={id}></div>          
        <h2>{title}</h2>
        <img src={imagen} alt="no hay imagen" width="200px" heigth="250"/>

      </div>
  )
}