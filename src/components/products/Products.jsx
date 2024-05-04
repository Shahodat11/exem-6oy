import React from 'react'
import { Link } from 'react-router-dom'
import '../products/Products.css'
import cart from '../../assets/Link (3).svg'
import Skeleton from '../../pages/skeleton/Skeleton'

const Products = ({data, loading}) => {
    let products = data?.map((el)=> <div className='cardd' key={el.id}>
    <Link to={`/single/${el.id}`}>
      <img src={el.image} width={250} height={250} alt="" />
    </Link>
    <p className='title' style={{padding: '13px 0'}}>{el.title}</p>
    <p className='rating'>Rating {el.rating.rate}</p>
    <p className='p'>By Stouffer</p>
    `<div className='price'><p className='card__price'>${el.price}</p><img src={cart} alt="" /></div>   `
  </div>)
  return (
    < >
    {loading?<Skeleton count={10}/>:<></>}
        <div className='cards1 container' style={{display: 'flex', gap: "16px", flexWrap: 'wrap'}}>{products}</div>
    </>
  )
}

export default Products