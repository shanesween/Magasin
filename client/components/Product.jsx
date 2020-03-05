import React from 'react'

const Product = props => {
  return (
    <div>
      <img src={props.product.imageUrl} />
      <h1>{props.product.title}</h1>
      <h2>{props.product.price}</h2>
    </div>
  )
}

export default Product
