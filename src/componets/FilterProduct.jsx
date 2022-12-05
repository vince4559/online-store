import {
    Drawer,
    Box,
    Button,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Radio,
    Stack,
    CheckboxGroup,
    Checkbox,
  } from '@chakra-ui/react'
import React from 'react'

const FilterProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
  return (
   <Box  p={2} bg={'gray.100'}>
     <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Filter Product
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter Product</DrawerHeader>

          <DrawerBody>
                <RadioGroup defaultValue='1'>
                   <Stack mb={1}>
                   <Radio value='1'>Asending</Radio>
                    <Radio value='2'>Desending</Radio>
                   </Stack>
                   <CheckboxGroup>
                    <Stack spacing={2}>
                    <Checkbox>Include out of stock</Checkbox>
                    <Checkbox>Fast delivery</Checkbox>
                    </Stack>
                   </CheckboxGroup>
                </RadioGroup>
                <Box mb={3}>
                <span>Rating: </span>
                </Box>
                <Button>Clear Filter</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
   </Box>
  )
}

export default FilterProduct
