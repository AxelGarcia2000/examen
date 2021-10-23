import React from 'react'
import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//info peliculas
export default function Movies (props) {
        return (
            <div >
                <h2>Cartelera de Cinepolis</h2>
                  {
                    props.cartelera.map((p,i)=>{
                      return (
                         <div className="pelicula" key={i}>                                                  
                              <img src={p.url} alt={p.nombre} />                                                        
                            <div>
                                <p>{p.nombre}</p>
                                <p>{p.idioma}</p>
                                <p>{p.clasificacion}</p>
                                <p>{p.duracion}</p>                                
                                  {p.horarios.map((a,b)=><Button key={b} onClick={()=>props.agregar(p,a)}style={{margin:'1vmin'}}>{a}</Button>)}                                
                            </div>
                          </div>)                   
                    })
                  }              
            </div>
        )
}
