import {Flex, FormControl,  Input, } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from "react-router-dom"
import CartMenu from './CartMenu';
import { DataProvider } from '../context/Context';
import { FILTERACTIONS } from '../context/Reducer';


const Navbar = () => {
  const { filterDispatch} = DataProvider();
  return (
    <Flex justifyContent={'space-around'} bg={'darkblue'} w={'100vw'} p={3} gap={5}  >
      <Flex alignItems={'center'}>
        <NavLink to={'/'} style={({isActive}) => isActive? {color:'yellow'} : {color:'white'}} >
            Shop
        </NavLink>
      </Flex>
      <Flex>
        <FormControl  >
          <Input type={'search'} 
          name='product-search' placeholder='search product' 
          color={'white'}
          onChange={(e) => filterDispatch({
            type: FILTERACTIONS.FILTER_BY_SEARCH,
            payload:e.target.value
          })}
          />
        </FormControl>
      </Flex>
      <Flex>
        <CartMenu />
      </Flex>
    </Flex>
  )
}

export default Navbar
