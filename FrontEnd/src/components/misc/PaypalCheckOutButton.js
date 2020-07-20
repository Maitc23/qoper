

import React, { useState, useRef, useEffect } from 'react';


const PaypalCheckOutButton = ({ product }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            style: {
              color: 'blue',
              shape: 'pill',
              label: 'Pagar',
              height: 40
            },
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },

        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },

        onError: err => {
          setError(err);
          console.error(err);
        },

      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    return (
      <div>
        <h1>Pago al trabajo de {product.name}, realizado con exito!</h1>
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, ocurrio un error, intente otra vez! {error.message}</div>}
      <h1>
        {product.description} por ${product.price}
      </h1>
      <div ref={paypalRef} />
    </div>
  );
}
    
    



export default PaypalCheckOutButton;
