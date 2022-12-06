import { HStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar, AiOutlineStar} from "react-icons/ai"


const Rating = ({onClick,rating, style }) => {
  return (
    <HStack spacing={0}>
   {
    [...Array(5)].map((_, i) => (
      <span key={i} onClick={() => onClick(i + 1)} style={style} >
        {rating > i ? (<AiFillStar color='orange' />) : (<AiOutlineStar />)}
      </span>
    ))
  }
    </HStack>
  )
}

export default Rating
