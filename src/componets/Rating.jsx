import React from 'react'
import { AiFillStar, AiOutlineStar} from "react-icons/ai"


const Rating = ({onClick,rating }) => {
  return (
    <>
   {
    [...Array(5)].map((_, i) => (
      <span key={i} onClick={() => onClick(i + 1)} >
        {rating > i ? (<AiFillStar />) : (<AiOutlineStar />)}
      </span>
    ))
  }
    </>
  )
}

export default Rating
