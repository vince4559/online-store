import { Button, Menu, MenuButton, MenuItem, MenuList, Badge } from '@chakra-ui/react';
import React from 'react'
import { BsCart4 } from "react-icons/Bs";
import { NavLink } from "react-router-dom"

const CartMenu = () => {
  return (
    <Menu isLazy>
    <MenuButton px={4}
    as={Button} leftIcon={<BsCart4 />} 
    py={2}
    transition='all 0.2s'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}>
      <Badge colorScheme={'none'} >0</Badge>
      </MenuButton>
      <MenuList>
        <MenuItem>hello</MenuItem>
        <MenuItem>              
        <NavLink to={'/cart'} style={({isActive}) => isActive? {color:'black'} : {color:'blue'}} >
              Proceed to Cart
          </NavLink></MenuItem>
      </MenuList>
  </Menu>       
  )
}

export default CartMenu
