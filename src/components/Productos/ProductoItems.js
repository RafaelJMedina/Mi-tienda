import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ProductoItems = ({
id,
title,
price,
image,
category,
cantidad,    
}) => {


  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p>Precio: ${price}</p>
                    <p>categoria: {category}</p>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductoItems;
