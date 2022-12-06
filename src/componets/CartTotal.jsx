import { Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { DataProvider } from '../context/Context';

const CartTotal = () => {
    const {state:{cart}, dispatch } = DataProvider();
    const [total, setTotal] = useState();

    useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)) 
    },[cart])
  return (
    <Stack bg={'green.100'} p={2}   rounded={'lg'} >  
        <HStack spacing={10}>
        <Text fontWeight={'bold'}>Subtotal: {cart.length} item(s)</Text>
        <Text fontWeight={'bold'}>Total: ${total}</Text>
        </HStack>
        <VStack>
        <Button disabled={cart.length === 0} size={'md'} w={'fit-content'} colorScheme='messenger'>
            Proceed to checkout
        </Button>
        </VStack>
    </Stack>
  )
}

export default CartTotal
