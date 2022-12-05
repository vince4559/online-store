import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import FilterProduct from '../componets/FilterProduct';
import SingleProducts from '../componets/SingleProducts';
import { DataProvider } from '../context/Context';


const Shop = () => {
   const {state:{products}} = DataProvider();
  return (
      <Box maxW={'100vw'} >
      <FilterProduct />
      <Flex  wrap={'wrap'} w={'full'} justify='space-around'>
      {
        products.map(prod => {
          return <SingleProducts key={prod.id} prod={prod} />
        })
      }
    </Flex>
      </Box>      
  )
}

export default Shop
