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

