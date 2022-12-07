import { Heading,  HStack,  VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <VStack w={'70%'} rounded={'2xl'} m={5} p={4}>
        <Heading textAlign={'center'}>Page Not Found </Heading>
          <Text textAlign={'center'}>
            Looks like you've followed a broken link or entered a url that does'nt exist on this page
          </Text>
          <Link to={'/'}> 
              <HStack>
              <BsFillArrowLeftCircleFill />
              <Text> Go Back Home</Text>
              </HStack>
          </Link>
    </VStack>
  )
}

export default ErrorPage
