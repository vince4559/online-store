import { HStack, Card, CardBody, CardFooter, Divider, Flex, Image, Stack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import PriceFormater from '../utilities/PriceFormater'
import Rating from './Rating'
import { DataProvider } from '../context/Context';
import { ACTIONS } from '../context/Reducers';



const SingleProducts = ({prod}) => {
    const {state:{cart}, dispatch } = DataProvider();
  return (
   <Flex p={1.5} >
        <Card m={'.4rem'}>
            <CardBody>
                <Image loading='lazy' alt='Phone_product' src={prod.image} w='180px' objectFit='cover' />
            </CardBody>
            <Divider />
            <CardFooter bg={'gray.50'}>
                <Stack spacing={1}>
                    <Text>{prod.name}</Text>
                    <Text>{PriceFormater(prod.price)}</Text>
                    <HStack spacing={0}><Rating rating = {prod.rating} /></HStack>
                    { 
                        prod.fastDelivery? <Text>fastDelivery</Text>: <Text>4 days delivery</Text>
                    }
                    <HStack>
                        {
                        cart.some(p => p.id === prod.id)? ( 
                        <Button size={'sm'} 
                            onClick={()=>{dispatch({
                            type:ACTIONS.REMOVE_FROM_cART, payload:prod})}}>
                                Remove From Cart
                        </Button>) : 
                            (
                        <Button size={'sm'} disabled={!prod.inStock}
                            onClick={()=>{dispatch({
                            type:ACTIONS.ADD_TO_CART, payload:prod})}}
                        >
                        {!prod.inStock? 'Out Of Stock': 'Add To Cart'}
                        </Button>)
                        }
                    </HStack>        
                                       
                </Stack>
            </CardFooter>
        </Card>
   </Flex >
  )
}

export default SingleProducts
