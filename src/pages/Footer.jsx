
import { Flex, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <HStack bg={'gray'} maxW={'100vw'} p={3} justify='space-around' px={5}>
        <Flex align={'center'}>
            <Text color={'white'}>Thanks you for shopping with us..</Text>
        </Flex>
        <Flex>
            <Link  href=''>
                <BsFillArrowUpCircleFill  color='white' fontSize={'1.2rem'}/>
            </Link>
        </Flex>
        
    </HStack>
  )
}

export default Footer
