import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import FilterProduct from '../componets/FilterProduct';
import SingleProducts from '../componets/SingleProducts';
import { DataProvider } from '../context/Context';


const Shop = () => {
   const {state:{products},
   filterState:{byStock,byFastDelivery,byRating, sort, searchQuery}} = DataProvider();

   const transformProducts = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=>(
        sort ==='lowToHigh'? a.price - b.price : b.price - a.price
      ))
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery)
      )
    }

    return sortedProducts
   }
  return (
      <Box maxW={'100vw'} >
      <FilterProduct />
      <Flex  wrap={'wrap'} w={'full'} justify='space-around'>
      {
        transformProducts().map(prod => {
          return <SingleProducts key={prod.id} prod={prod} />
        })
      }
    </Flex>
      </Box>      
  )
}

export default Shop
