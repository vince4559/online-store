import { HStack, Image, IconButton,  List, ListItem, Box, FormControl } from '@chakra-ui/react'
import React from 'react'
import { DataProvider } from '../context/Context';
import { AiFillDelete } from "react-icons/ai";
import PriceFormater from '../utilities/PriceFormater';
import { ACTIONS } from '../context/Reducer';
import Rating from '../componets/Rating';
import CartTotal from '../componets/CartTotal';


const Cart = () => {
  const {state:{cart}, dispatch } = DataProvider();

  return (
    <Box  m={1}   w={'100vw'}>
      {
        cart.map(prod => (
          <List key={prod.id} p={3} >
            <ListItem shadow={'base'} >
            <HStack  spacing={2}>
            <Image alt='cart_img' src={prod.image} w='60px' rounded={'base'} loading='lazy' />
            <p>{prod.name}</p>
          <p>{PriceFormater(prod.price)}</p>  
          <Box>
            Qty: <FormControl as={'select'} value={prod.qty}   
            w={'50px'} colorScheme={'green'}
            onChange={(e) => dispatch({
              type: ACTIONS.CHANGE_CART_Qty,
              payload:{
                id:prod.id,
                qty: e.target.value
              }
            })}
            >
            {[...Array(5).keys()].map(x => (
              <option key={x + 1}>{x + 1}</option>
            ))}
          </FormControl>
          </Box>
          <HStack  ><Rating rating = {prod.rating} /></HStack>        
          <IconButton icon={<AiFillDelete />}
          cursor={'pointer'}
            colorScheme='none' color={'red'} 
            onClick={() =>dispatch({type: ACTIONS.REMOVE_FROM_cART, payload:prod}) }
            />
            
            </HStack>
            </ListItem>
          </List>
        ))
      }
      <CartTotal />
    </Box>
  )
}

export default Cart


