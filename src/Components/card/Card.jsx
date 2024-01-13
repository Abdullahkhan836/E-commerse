import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, src, description, price ,id ,showBtn = true}) => {
   const navigate =  useNavigate();
   function singleProductPage(){
    navigate(`/singleproduct/${id}`)
   }

    return (
        <div className="border-black  card ml-7 mt-10 p-5 h-85 w-96 bg-base-100 shadow-xl">
            <figure><img className='w-40' src={src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0,150)}...</p>
                <p>Price {price}</p>
                <div className="card-actions justify-end">
                    {showBtn ? <button className="btn btn-primary" onClick={singleProductPage} >Buy Now</button> : null}
                </div>
            </div>
        </div>
    )
}

export default Card