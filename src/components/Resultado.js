import React from 'react'

const Resultadao = ({total, plazo, cantidad}) => {
  return ( 
    <div className="u-full-width resultado">
      <h2>Resumen</h2>
      <p>La cantidad solicitada es: $ {cantidad}</p>
      <p>A pagar en: {plazo} meses</p>
      <p>Su pago mensual es de: $ {(total / plazo).toFixed(1)}0</p>
      <p>El total a pagar: $ {total}</p>
    </div>
   );
}
 
export default Resultadao;