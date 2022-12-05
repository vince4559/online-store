import {Flex, FormControl,  Input, } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from "react-router-dom"
import CartMenu from './CartMenu';


const Navbar = () => {
  return (
    <Flex justifyContent={'space-around'} bg={'darkblue'} w='100vw' p={3} gap={5} >
      <Flex alignItems={'center'}>
        <NavLink to={'/'} style={({isActive}) => isActive? {color:'yellow'} : {color:'white'}} >
            Shop
        </NavLink>
      </Flex>
      <Flex>
        <FormControl  >
          <Input type={'search'} name='product-search' placeholder='search' color={'white'}/>
        </FormControl>
      </Flex>
      <Flex>
        <CartMenu />
      </Flex>
    </Flex>
  )
}

export default Navbar
