import React, { useState, useEffect } from "react";
import Cardi from "./Cardi"

export default function Carrito () {

    let variable = JSON.parse(localStorage.getItem('carrito'))

    /* localStorage.setItem('carrito visual', variable.length) */

    return (
        <article>
          
            <div >
              <div >
              {Array.isArray(variable) && variable.length ? (
              variable.map((e) => {
                return (
                  <div key={e.id}>
                    <Cardi
                      title={e.title}
                      imagen={e.imagen}
                      date={e.date}
                      id={e.id}
                      eventType={e.eventType}
                      state={e.state}
                      place={e.place}
                      key={e.id}
                      month={e.month}
                    />
                   
                  </div>
                  
                );
              })
            ) : (
              <h1>Error</h1>
            )}
              </div>
            </div>
          
        </article>
      );
    };

