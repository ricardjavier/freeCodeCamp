import React from "react";
import '../hoja-de-estilos/Testimonio.css';

const TextoConNegrita = (props) => {
    const {Testimonio,negrillas} = props;
  
    const inicioFraseNegrita = Testimonio.indexOf(negrillas);
    const finFraseNegrita = inicioFraseNegrita + negrillas.length;
  
    const estilo = {
      fontWeight: 'normal',
    };
  
    if (inicioFraseNegrita !== -1) {
      estilo.fontWeight = 'bold';
    }
  
    return (
      <span>
        {Testimonio.substring(0, inicioFraseNegrita)}
        <span style={estilo}>
          {Testimonio.substring(inicioFraseNegrita, finFraseNegrita)}
        </span>
        {Testimonio.substring(finFraseNegrita)}
      </span>
    );
  };
  
 

function TestimonioComponente(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src = {require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='foto emma'/>

        <div

          className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'> <strong>{props.nombre}</strong> en {props.pais}</p>
            <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
            <p className='texto-testimonio'><TextoConNegrita Testimonio={props.Testimonio} negrillas={props.negrillas} /></p>

        </div>
   </div>
  );   
} 

export default TestimonioComponente;

export const testimonioShawn = {
  nombre: 'Shawn Wang',
  pais: 'Singapur',
  imagen: 'shawn',
  cargo: 'Ingeniero de Software',
  empresa: 'Amazon',
  Testimonio: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer.freeCodeCamp changed my life",
  negrillas: 'freeCodeCamp changed my life'
};

export const testimonioSarah = {
  nombre: 'Sarah Chima',
  pais: 'Nigeria',
  imagen: 'sarah',
  cargo: 'Ingeniera de Software',
  empresa: 'ChatDesk',
  Testimonio: "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
  negrillas: 'freeCodeCamp was the gateway to my career'
};

export const testimonioEmma = {
  nombre: 'Emma Bostian',
  pais: 'Suecia',
  imagen: 'emma',
  cargo: 'Ingeniera de Software',
  empresa: 'Spotify',
  Testimonio: "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
  negrillas: 'freeCodeCamp gave me the skills'}
  