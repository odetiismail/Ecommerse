import React from 'react'

const ItemImage = ({curr}) => {
     const {image}=curr
  return (
    <div>
        <img src={image} className='w-[80px]'/>
    </div>
  )
}

export default ItemImage