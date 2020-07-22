import React from 'react'
import PaypalCheckOutButton from '../misc/PaypalCheckOutButton'

export default function Factura() {

    const product = {
        price: 777.77,
        name: 'Trabajo del baño',
        description: 'Trabajo realizado',
    };

    return (
        <div>
            <PaypalCheckOutButton product= {product} />
        </div>
    )
}
