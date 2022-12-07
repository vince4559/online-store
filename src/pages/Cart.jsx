import { HStack, Image, IconButton,  List, ListItem, Box, FormControl, Stack } from '@chakra-ui/react'
import React from 'react'
import { DataProvider } from '../context/Context';
import { AiFillDelete } from "react-icons/ai";
import PriceFormater from '../utilities/PriceFormater';
import { ACTIONS } from '../context/Reducers';
import Rating from '../componets/Rating';
import CartTotal from '../componets/CartTotal';


const Cart = () => {
  const {state:{cart}, dispatch } = DataProvider();

  return (
    <Box  m={1}   maxW={'100vw'} h='fit-content'>
     <Stack>
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
            cursor={'pointer'}
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
          <HStack display={['none', 'none', 'block', 'block']} ><Rating rating = {prod.rating} /></HStack>        
          <IconButton icon={<AiFillDelete />}
           display={['none', 'none', 'block', 'block']}
          cursor={'pointer'}
            colorScheme='none' color={'red'} 
            onClick={() =>dispatch({type: ACTIONS.REMOVE_FROM_cART, payload:prod}) }
            />
            
            </HStack>
            </ListItem>
          </List>
        ))
      }
     </Stack>
      <CartTotal />
    </Box>
  )
}

export default Cart


