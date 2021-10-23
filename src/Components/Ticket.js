import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//parte derecha que muestra info de ticket
const Ticket = (props) => {
    return ( 
        <div >{
            //botones
            Object.keys(props.compra).length!==0?
            <div>
                <h2>Seleciona tu compra</h2>               
                  <p>{props.compra.nombre} ({props.compra.idioma})</p>
                  <p>Horario de la pelicula: {props.compra.horario}</p>                 
                  <p>Cantidad de boletos: <input type='number' value={props.compra.cantidad} onChange={e=>props.precioboleto(e.target.value,props.compra)}/></p>
                  <p>Total, (IVA incluido):${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  <div>                     
                     <Button onClick={()=>props.elimina()}variant="danger">Cancelar compra</Button> 
                     <Button onClick={()=>props.carrito(props.compra)}variant="success">Comprar boletos</Button>                                        
                  </div>               
               </div>:                          
                <p>Selecciona horario</p>                            
               //solo texto         
              }
          </div>
     );
} 
export default Ticket;
//https://getbootstrap.com/docs/5.1/components/buttons/