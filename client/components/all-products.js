import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../store/products'
import Product from './product'

const AllProducts = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div>
      {products.map(product => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default AllProducts
