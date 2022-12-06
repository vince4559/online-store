import { Button, Menu, MenuButton, MenuItem, MenuList, Badge, HStack, Image, Stack, IconButton } from '@chakra-ui/react';
import React from 'react'
import { BsCart4 } from "react-icons/Bs";
import { AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom"
import { DataProvider } from '../context/Context';
import PriceFormater from '../utilities/PriceFormater';
import { ACTIONS } from '../context/Reducer';


const CartMenu = () => {
  const {state:{cart}, dispatch}= DataProvider();
  return (
    <Menu isLazy>
    <MenuButton px={4}
    as={Button} leftIcon={<BsCart4 />} 
    py={2}
    transition='all 0.2s'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}>
      <Badge colorScheme={'none'} >{cart.length}</Badge>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Stack>
          {
            cart.length>0 ? (
              <>
                {cart.map(prod => (
                  <HStack key={prod.id}>
                    <Image alt='cart_img' src={prod.image} w='50px' rounded={'base'} loading='eager' />
                      <p>{prod.name}</p>
                      <p>{PriceFormater(prod.price)}</p>
                      <IconButton  icon={<AiFillDelete />}
                      cursor={'pointer'}
                       colorScheme='none' color={'red'} 
                       onClick={() =>dispatch({type: ACTIONS.REMOVE_FROM_cART, payload:prod}) }
                       />
                  </HStack>
                ))}
              </>
            ) :(
              <p>Cart is empty</p>
            )
          }
          </Stack>
        </MenuItem>
        <MenuItem>              
        <NavLink to={'/cart'} style={({isActive}) => isActive? {color:'black'} : {color:'blue'}} >
              Proceed to Cart
          </NavLink></MenuItem>
      </MenuList>
  </Menu>       
  )
}

export default CartMenu
