import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Ticket from './Components/Ticket';
import Movies from './Components/Movies';

class App extends Component {
  render() { 
    return (
      //contenedor
      <div className="App">
        <Header/>
        <div className="cine">
          
          <Movies
            cartelera={this.state.cartelera}
            agregar={this.agregar}
          />
          <Ticket
            compra={this.state.compra}
            precioboleto={this.precioboleto}
            elimina={this.elimina}
            carrito={this.carrito}
          />          
        </div>
      </div>
    )
  }
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    }; 
  }
  agregar=(pelicula,hora)=>{
    const x={
      codigo:pelicula.codigo,
      nombre:pelicula.nombre, 
      idioma:pelicula.idioma, 
      clasificacion:pelicula.clasificacion,
      hora:hora,
      totalboletos:0,
      duracion:pelicula.duracion,
      total:0
    }
     this.setState({
        ...this.state,
        compra:x
    })     
}
elimina=()=>{
  this.setState({
    ...this.state,
    compra:[],
  })
}  
  precioboleto=(bol,pelicula)=>{
    let precioboleto;
    if(pelicula.clasificacion==='A')
    precioboleto=50;
    if(pelicula.clasificacion==='B')
    precioboleto=80;      
    if(pelicula.clasificacion==='C')
    precioboleto=95;
    const z={
    codigo:pelicula.codigo,
    nombre:pelicula.nombre, 
    idioma:pelicula.idioma, 
    clasificacion:pelicula.clasificacion,
    hora:pelicula.hora,
    totalboletos:bol,
    duracion:pelicula.duracion,
    total:bol*precioboleto
    }
    this.setState({
      ...this.state,
      compra:z,
    })
  }
//https://sweetalert2.github.io/#sponsors  
  carrito=(pelicula)=>{

     if(pelicula.totalboletos>0){
      Swal.fire({
        title: 'Gracias por tu compra',
        text: 'Cobro realizado :)',
        imageUrl: 'https://i.pinimg.com/originals/fb/74/23/fb742355f40a667ed457b5299d75ce4a.gif',
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
      this.setState({
        ...this.state,
        compra:[],
      })
    } 

    else if(pelicula.totalboletos<=0){
      Swal.fire({
        title: 'No ha seleccionado la cantidad de boletos',
        text: 'Cobro no realizado :(',
        imageUrl: 'https://gifimage.net/wp-content/uploads/2017/10/home-alone-scream-gif-1.gif',
        imageWidth: 300,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
    }
    
  }  
}
export default App;
