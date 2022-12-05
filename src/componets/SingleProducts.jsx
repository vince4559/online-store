import { HStack, Card, CardBody, CardFooter, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import PriceFormater from '../utilities/PriceFormater'
import Rating from './Rating'


const SingleProducts = ({prod}) => {
  return (
   <Flex p={3} >
        <Card m={'.5rem'}>
            <CardBody>
                <Image loading='lazy' alt='Phone_product' src={prod.image} w='200px' objectFit='cover' />
            </CardBody>
            <Divider />
            <CardFooter bg={'gray.50'}>
                <Stack spacing={0}>
                    <Text>{prod.name}</Text>
                    <Text>{PriceFormater(prod.price)}</Text>
                    <Text>{prod.rating}</Text>
                    <HStack spacing={0}><Rating rating = {prod.rating} /></HStack>
                    { 
                        prod.fastDelivery? <Text>fastDelivery</Text>: <Text>4 days delivery</Text>
                    }
                </Stack>
            </CardFooter>
        </Card>
   </Flex >
  )
}

export default SingleProducts
